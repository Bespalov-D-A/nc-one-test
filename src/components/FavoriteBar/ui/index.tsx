import Card from "@mui/material/Card";
import "./fade.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { apiUrl } from "../../../config";
import { Iimage } from "../../../config/types";
import CustomScrollBar from "../../../shared/ui/CustomScrollBar";
import { useGlobalState } from "../../../store";
import { FavoriteCard } from "../../FavoriteCard";
import { getAllFavProducts } from "../lib";
import { scrollStyles, trackStyles } from "../model";
import s from "./index.module.scss";

interface IFavoriteBar {}

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
            <TransitionGroup>
              {favoriteProducts &&
                Array.isArray(favoriteProducts) &&
                favoriteProducts.map((product: Iimage) => {
                  return (
                    <CSSTransition
                      key={product.id}
                      timeout={300}
                      classNames="fade"
                    >
                      <FavoriteCard
                        show={true}
                        {...product}
                        src={apiUrl + product.src}
                      />
                    </CSSTransition>
                  );
                })}
            </TransitionGroup>
          )}
        />
      </Card>
    </div>
  );
};

export default FavoriteBar;
