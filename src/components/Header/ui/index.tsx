import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useGlobalState } from "../../../store";
import s from "./index.module.scss";

interface IHeader {}

const Header: FC<IHeader> = props => {
  const [title] = useGlobalState("title");
  return (
    <Box sx={{ backgroundColor: "primary.main" }} className={s.header}>
      <Typography color="secondary" variant="h1" component="h1">
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
