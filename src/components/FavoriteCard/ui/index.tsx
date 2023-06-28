import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Iimage } from "../../../config/types";
import { ActionBlock } from "../../_common/CardAction";
import s from "./index.module.scss";

interface IFavoriteCard extends Iimage {}

const FavoriteCard: React.FC<IFavoriteCard> = props => {
  const { id, name, price, src } = props;
  const active = true;

  return (
    <Card className={s.card}>
      <CardMedia
        component="img"
        className={s.photo}
        image={src}
        alt="Paella dish"
      />
      <Box className={s.wrap}>
        <CardContent className={s.content}>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
        </CardContent>
        <ActionBlock id={id} price={price} active={active} />
      </Box>
    </Card>
  );
};

export default FavoriteCard;
