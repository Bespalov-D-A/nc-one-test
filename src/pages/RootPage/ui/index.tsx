import React from "react";
import { Outlet } from "react-router-dom";
import { FavoriteBar } from "../../../components/FavoriteBar";
import { Header } from "../../../components/Header";
import CustomScrollBar from "../../../shared/ui/CustomScrollBar";
import s from "./index.module.scss";

interface IRootPage {}

const RootPage: React.FC<IRootPage> = props => {
  return (
    <div className={s["root-page"]}>
      <Header />
      <div className={s.content}>
        <FavoriteBar />
        <CustomScrollBar
          component={() => {
            return (
              <div className={s.wrap}>
                <Outlet />
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default RootPage;
