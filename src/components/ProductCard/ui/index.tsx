import Card from "@mui/material/Card";
import React from "react";
import s from "./index.module.scss";

interface IProductCard {}

const ProductCard: React.FC<IProductCard> = props => {
  return <Card className={s.card}>ProductCard</Card>;
};

export default ProductCard;
