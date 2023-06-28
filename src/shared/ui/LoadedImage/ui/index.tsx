import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { useImage } from "react-image";

interface ILoadedImage {
  url: string | string[];
  style?: { [key: string]: string | number };
}

//Оборачиваем изображениe в suspense и показываем его
//только после того как изображение полностью загружено
const LoadedImage: React.FC<ILoadedImage> = ({ url, style }) => {
  const { src, isLoading } = useImage({
    srcList: url,
    useSuspense: false,
  });
  return isLoading ? (
    <Skeleton style={style ? style : {}} />
  ) : (
    <img src={src} style={style ? style : {}} />
  );
};

export default LoadedImage;
