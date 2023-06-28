import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Iproduct } from "../../../config/types";
import s from "./index.module.scss";
import { ActionBlock } from "../../_common/CardAction";
import { useNavigate } from "react-router-dom";
import { FC, Suspense } from "react";
import Box from "@mui/material/Box";
import { LoadedImage } from "../../../shared/ui/LoadedImage";

interface IProductCard extends Iproduct {
  setProducts: (arg1: Iproduct[]) => void;
}

//Компонент стандартной карточки продукта
//страницы с продуктами
const ProductCard: FC<IProductCard> = props => {
  const { id, name, price, src, active } = props;
  const navigate = useNavigate();

  return (
    <Card className={s.card}>
      <Box className={s.photo} onClick={() => navigate(`product?id=${id}`)}>
        <Suspense fallback>
          <LoadedImage style={{ height: 194 }} url={src} />
        </Suspense>
      </Box>
      <CardContent className={s.content}>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
      <ActionBlock id={id} price={price} active={active} />
    </Card>
  );
};

export default ProductCard;
