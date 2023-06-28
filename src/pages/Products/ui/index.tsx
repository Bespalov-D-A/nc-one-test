import React from "react";
import { ProductsList } from "../../../components/ProductsList";

interface IProductsPage {}

const ProductsPage: React.FC<IProductsPage> = props => {
  return <ProductsList />;
};

export default ProductsPage;
