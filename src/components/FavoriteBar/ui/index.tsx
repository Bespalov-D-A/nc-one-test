import Card from "@mui/material/Card";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { apiUrl } from "../../../config";
import { Iimage, Iproduct } from "../../../config/types";
import CustomScrollBar from "../../../shared/ui/CustomScrollBar";
import { useGlobalState } from "../../../store";
import { FavoriteCard } from "../../FavoriteCard";
import { getAllFavProducts, remapFavorites } from "../lib";
import s from "./index.module.scss";

interface IFavoriteBar {}

export const scrollStyles = {
  position: "relative",
  height: "100%",
  padding: "0 12px 0 0",
};

export const trackStyles = {
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  width: 8,
  backgroundColor: "rgba(240,240,240,0)",
};

const FavoriteBar: React.FC<IFavoriteBar> = props => {
  const [favoriteProducts, setFavoriteProducts] =
    useGlobalState("favoriteProducts");
  const [favoriteProductsIds, setFavoriteProductsIds] = useGlobalState(
    "favoriteProductsIds"
  );
  const theme = useTheme();

  const thumbStyles = {
    position: "relative",
    width: 8,
    backgroundColor: theme.palette.primary.main,
    opacity: 0.2,
    borderRadius: 8,
    zIndex: 10,
  };

  useEffect(() => {
    const favorites: {} | undefined | { arr: number[] } =
      reactLocalStorage.getObject("fav");
    if (
      favorites &&
      "arr" in favorites &&
      Array.isArray(favorites.arr) &&
      favorites.arr.length > 0
    ) {
      getAllFavProducts(favorites.arr).then(res => {
        if (res) {
          setFavoriteProducts(res);
          setFavoriteProductsIds(res.map(e => e.id));
        }
      });
    }
  }, []);

  useEffect(() => {
    getAllFavProducts(favoriteProductsIds).then(res => {
      if (res) {
        setFavoriteProducts(res);
      }
    });
  }, [favoriteProductsIds.length]);

  return (
    <div className={s.wrap}>
      <Card className={s.bar}>
        <Typography className={s.title}>Favorites</Typography>
        <CustomScrollBar
          thumbStyles={thumbStyles}
          trackStyles={trackStyles}
          scrollStyles={scrollStyles}
          component={() => (
            <>
              {favoriteProducts &&
                Array.isArray(favoriteProducts) &&
                favoriteProducts.map((product: Iimage) => {
                  return (
                    <div key={product.id}>
                      <FavoriteCard {...product} src={apiUrl + product.src} />
                    </div>
                  );
                })}
            </>
          )}
        />
      </Card>
    </div>
  );
};

export default FavoriteBar;
