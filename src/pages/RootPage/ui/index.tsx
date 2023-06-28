import React from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { FavoriteBar } from "../../../components/FavoriteBar";
import { Header } from "../../../components/Header";
import { OpenFavorites } from "../../../shared/ui/btn/OpenFavorites";
import { DrawerComp } from "../../../shared/ui/DrawerComp";
import s from "./index.module.scss";

interface IRootPage {}

//Корневая страница содержащие общие элементы
//которые исользуются на всех страницах
const RootPage: React.FC<IRootPage> = props => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1280px)",
  });

  return (
    <div className={s["root-page"]}>
      <OpenFavorites />
      <Header />
      <div className={s.content}>
        {!isMobile ? (
          <FavoriteBar />
        ) : (
          <DrawerComp>
            <FavoriteBar />
          </DrawerComp>
        )}
        <div className={s.wrap}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootPage;
