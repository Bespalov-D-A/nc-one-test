import Grid from "@mui/system/Unstable_Grid";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../../api";
import { Iimage } from "../../../config/types";
import { ProductCard } from "../../ProductCard";

interface IProductsList {}

const ProductsList: React.FC<IProductsList> = props => {
  const [products, setProducts] = useState<[] | Iimage[]>([]);
  useEffect(() => {
    getProducts()
      .then(res => setProducts(res))
      .catch(e => console.log(e))
      .finally();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {products &&
          products.length > 0 &&
          products.slice(0, 9).map((product: Iimage) => (
            <Grid xs={3} key={product.id}>
              <ProductCard />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ProductsList;
