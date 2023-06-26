import Card from "@mui/material/Card";
import React from "react";
import s from "./index.module.scss";

interface IFavoriteBar {}

const FavoriteBar: React.FC<IFavoriteBar> = props => {
  return (
    <div className={s.wrap}>
      <Card className={s.bar}>LIKE</Card>
    </div>
  );
};

export default FavoriteBar;
