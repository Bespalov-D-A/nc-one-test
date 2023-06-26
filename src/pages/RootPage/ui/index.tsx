import React from "react";
import { Outlet } from "react-router-dom";
import { FavoriteBar } from "../../../components/FavoriteBar";
import { Header } from "../../../components/Header";

interface IRootPage {}

const RootPage: React.FC<IRootPage> = props => {
  return (
    <div>
      <Header />
      <FavoriteBar />
      <Outlet />
    </div>
  );
};

export default RootPage;
