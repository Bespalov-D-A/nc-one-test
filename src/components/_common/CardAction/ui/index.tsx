import CardActions from "@mui/material/CardActions";
import s from "./index.module.scss";
import Svg from "./../../../../shared/img/like.svg";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useGlobalState } from "../../../../store";

interface IActionBlock {
  active: boolean;
  id: number;
  price: number;
  item?: boolean;
}

const ActionBlock: React.FC<IActionBlock> = ({ active, id, price, item }) => {
  const [favoriteProducts, setFavoriteProducts] =
    useGlobalState("favoriteProducts");
  const [favoriteProductsIds, setFavoriteProductsIds] = useGlobalState(
    "favoriteProductsIds"
  );

  function addFavorite() {
    try {
      const favorites: {} | undefined | { arr: number[] } =
        reactLocalStorage.getObject("fav");
      if (favorites && "arr" in favorites && Array.isArray(favorites.arr)) {
        if (active) {
          const index = favorites.arr.findIndex(e => e === id);
          index !== -1 && favorites.arr.splice(index, 1);
        } else {
          favorites.arr.push(id);
        }
        reactLocalStorage.setObject("fav", favorites);
        setFavoriteProductsIds(favorites.arr);
      } else {
        const fav: { arr: number[] } = { arr: [] };
        fav.arr.push(id);
        reactLocalStorage.setObject("fav", fav);
        setFavoriteProductsIds(fav.arr);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <CardActions className={s.actions} disableSpacing>
      <Typography
        style={item ? { fontSize: 64, fontWeight: 500 } : {}}
        variant="body1"
        color="text.secondary"
      >
        ${price}
      </Typography>
      <IconButton onClick={addFavorite} aria-label="add to favorites">
        <div style={{ position: "relative" }}>
          {active && (
            <div
              style={{
                position: "absolute",
                top: item ? 5 : 1,
                left: item ? 5 : 1,
                width: item ? 80 : 30,
                height: item ? 80 : 30,
                borderRadius: 7,
                background: "#414141",
                zIndex: "1",
              }}
            />
          )}{" "}
          <img
            src={Svg}
            style={{
              position: "relative",
              zIndex: 2,
              width: item ? 98 : 30,
              height: item ? 98 : 30,
            }}
          />
        </div>
      </IconButton>
    </CardActions>
  );
};

export default ActionBlock;
