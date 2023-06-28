import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Iimage } from "../../../config/types";
import { LoadedImage } from "../../../shared/ui/LoadedImage";
import { ActionBlock } from "../../_common/CardAction";
import s from "./index.module.scss";

interface IFavoriteCard extends Iimage {
  show: boolean;
}

const FavoriteCard: React.FC<IFavoriteCard> = props => {
  const { id, name, price, src, show } = props;
  const active = true;
  const navigate = useNavigate();

  return (
      <Card className={s.card}>
        <Box className={s.photo} onClick={() => navigate(`product?id=${id}`)}>
          <Suspense fallback>
            <LoadedImage url={src} />
          </Suspense>
        </Box>

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
