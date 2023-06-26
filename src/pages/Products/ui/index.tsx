import React from "react";
import { ProductsList } from "../../../components/ProductsList";

interface IProductsPage {}

const ProductsPage: React.FC<IProductsPage> = props => {
  return (
    <div>
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
