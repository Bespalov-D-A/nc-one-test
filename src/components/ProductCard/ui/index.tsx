import Card from "@mui/material/Card";
import { reactLocalStorage } from "reactjs-localstorage";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Iimage, Iproduct } from "../../../config/types";
import s from "./index.module.scss";
import { ActionBlock } from "../../_common/CardAction";
import { setLike } from "../../../shared/lib/activeLike";
import { useNavigate } from "react-router-dom";

interface IProductCard extends Iproduct {
  setProducts: (arg1: Iproduct[]) => void;
}

const ProductCard: React.FC<IProductCard> = props => {
  const { id, name, price, src, active, setProducts } = props;
  const navigate = useNavigate();

  return (
    <Card className={s.card}>
      <CardMedia
        className={s.photo}
        onClick={() => navigate(`product?id=${id}`)}
        component="img"
        height="194"
        image={src}
        alt="Paella dish"
      />
      <CardContent className={s.content}>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
      <ActionBlock id={id} price={price} active={active} />
    </Card>
  );
};

export default ProductCard;
