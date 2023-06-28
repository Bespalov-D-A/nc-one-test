import React from "react";
import { ProductItem } from "../../../components/ProductItem";

interface IProductItemPage {}

const ProductItemPage: React.FC<IProductItemPage> = props => {
  return <ProductItem />;
};

export default ProductItemPage;
