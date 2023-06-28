import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { getOneProduct } from "../../../api";
import { apiUrl } from "../../../config";
import { Iproduct } from "../../../config/types";
import { useGlobalState } from "../../../store";
import { ActionBlock } from "../../_common/CardAction";
import s from "./index.module.scss";

interface IProductItem {}

const ProductItem: React.FC<IProductItem> = props => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [product, setProduct] = useState<null | Iproduct>(null);
  const [products] = useGlobalState("products");
  const [favoriteProductsIds] = useGlobalState("favoriteProductsIds");

  const isActive = () =>
    id && !!favoriteProductsIds.includes(Number(id)) ? true : false;

  useEffect(() => {
    if (id) {
      getOneProduct(Number(id))
        .then(res => {
          setProduct({ ...res, active: false });
        })
        .catch(e => console.log(e))
        .finally(() => {});
    }
  }, []);

  return product ? (
    <Box className={s.wrap}>
      <Card className={s.product}>
        <CardMedia
          component="img"
          className={s.photo}
          image={apiUrl + product.src}
          alt="Paella dish"
        />
        <Box className={s["action-wrap"]}>
          <CardContent className={s.content}>
            <Typography className={s.title} variant="h1" color="text.secondary">
              {product.name}
            </Typography>
          </CardContent>

          <ActionBlock
            item={true}
            id={product.id}
            price={product.price}
            active={isActive()}
          />
        </Box>
      </Card>
    </Box>
  ) : (
    <></>
  );
};

export default ProductItem;
