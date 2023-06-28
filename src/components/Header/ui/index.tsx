import { Box, Button, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PRODUCT_ITEM_TITLE,
  PRODUCT_LIST_TITLE,
} from "../../../shared/assests/constants";
import s from "./index.module.scss";

interface IHeader {}

const Header: FC<IHeader> = props => {
  const [title, setTitle] = useState<string>("");
  const [isMain, setIsMain] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle(PRODUCT_LIST_TITLE);
        setIsMain(true);
        break;
      case "/product":
        setTitle(PRODUCT_ITEM_TITLE);
        setIsMain(false);
        break;
    }
  }, [location]);

  return (
    <Box id='header' sx={{ backgroundColor: "primary.main" }} className={s.header}>
      <Box className={s["btn-wrap"]}>
        <Button
          color="secondary"
          variant={"outlined"}
          onClick={() => navigate("/")}
        >
          Главная
        </Button>

        {!isMain && (
          <Button
            color="secondary"
            variant={"outlined"}
            onClick={() => navigate(-1)}
          >
            Назад
          </Button>
        )}
      </Box>
      <Typography color="secondary" variant="h1" component="h1">
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
