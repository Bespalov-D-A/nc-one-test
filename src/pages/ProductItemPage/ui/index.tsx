import React from "react";
import { ProductItem } from "../../../components/ProductItem";

interface IProductItemPage {}

//Страница самого продукта
const ProductItemPage: React.FC<IProductItemPage> = props => {
  return <ProductItem />;
};

export default ProductItemPage;
