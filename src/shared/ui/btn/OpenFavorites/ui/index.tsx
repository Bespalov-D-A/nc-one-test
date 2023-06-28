import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { useGlobalState } from "../../../../../store";
import s from "./index.module.scss";
import Box from "@mui/material/Box";

interface IOpenFavorites {}

const OpenFavorites: React.FC<IOpenFavorites> = props => {
  const [drawerOpen, setDrawerOpen] = useGlobalState("drawerOpen");
  return (
    <Box className={s.btn}>
      <IconButton
        color={"secondary"}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <FavoriteBorderIcon />
      </IconButton>
    </Box>
  );
};

export default OpenFavorites;
