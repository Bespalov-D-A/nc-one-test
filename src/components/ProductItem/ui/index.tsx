import Box from "@mui/material/Box";
import ReactImageMagnify from "react-image-magnify";
import Zoom from "./../../../shared/img/zoom.svg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOneProduct } from "../../../api";
import { apiUrl } from "../../../config";
import { Iproduct } from "../../../config/types";
import { useGlobalState } from "../../../store";
import { ActionBlock } from "../../_common/CardAction";
import s from "./index.module.scss";
import { useMediaQuery } from "react-responsive";

interface IProductItem {}

const ProductItem: React.FC<IProductItem> = props => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [product, setProduct] = useState<null | Iproduct>(null);
  const [favoriteProductsIds] = useGlobalState("favoriteProductsIds");
  const isMobile = useMediaQuery({
    query: "(max-width: 1280px)",
  });

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
  }, [location]);

  return product ? (
    <Box className={s.wrap}>
      <Card className={s.product}>
        <Box className={s["photo-block"]}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                width: isMobile ? 200 : 448,
                height: isMobile ? 200 : 448,
                isFluidWidth: false,
                src: apiUrl + product.src,
              },
              largeImage: {
                src: apiUrl + product.src,
                width: 1200,
                height: 1200,
              },
            }}
          />
          <CardActions disableSpacing>
            <img src={Zoom} />
          </CardActions>
        </Box>
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
