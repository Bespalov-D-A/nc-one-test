import CardActions from "@mui/material/CardActions";
import s from "./index.module.scss";
import Svg from "./../../../../shared/img/like.svg";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { useGlobalState } from "../../../../store";
import { useMediaQuery } from "react-responsive";
import { addFavorite } from "../lib";

interface IActionBlock {
  active: boolean;
  id: number;
  price: number;
  item?: boolean;
}

//Компонент лайка продукта и его цены
const ActionBlock: React.FC<IActionBlock> = ({ active, id, price, item }) => {
  const [favoriteProductsIds, setFavoriteProductsIds] = useGlobalState(
    "favoriteProductsIds"
  );

  const isMobile = useMediaQuery({
    query: "(max-width: 1280px)",
  });

  return (
    <CardActions className={s.actions} disableSpacing>
      <Typography
        style={isMobile ? {} : item ? { fontSize: 64, fontWeight: 500 } : {}}
        variant="body1"
        color="text.secondary"
      >
        ${price}
      </Typography>
      <IconButton
        onClick={() =>
          addFavorite(active, id, (arr: number[]) =>
            setFavoriteProductsIds(arr)
          )
        }
        aria-label="add to favorites"
      >
        <div style={{ position: "relative" }}>
          {active && (
            <div
              style={{
                position: "absolute",
                top: isMobile ? 3 : item ? 5 : 3,
                left: isMobile ? 3 : item ? 5 : 3,
                width: isMobile ? 30 : item ? 80 : 24,
                height: isMobile ? 30 : item ? 80 : 24,
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
              width: isMobile ? 30 : item ? 98 : 30,
              height: isMobile ? 30 : item ? 98 : 30,
            }}
          />
        </div>
      </IconButton>
    </CardActions>
  );
};

export default ActionBlock;
