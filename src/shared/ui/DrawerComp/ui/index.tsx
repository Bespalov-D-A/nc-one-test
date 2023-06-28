import Drawer from "@mui/material/Drawer";
import React, { ReactElement, ReactNode } from "react";
import { useGlobalState } from "../../../../store";
import s from "./index.module.scss";

interface IDrawerComp {
  children: ReactElement | ReactNode;
}

const DrawerComp: React.FC<IDrawerComp> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useGlobalState("drawerOpen");
  return (
    <Drawer
      className={s.wrap}
      onClose={() => setDrawerOpen(false)}
      open={drawerOpen}
    >
      {children}
    </Drawer>
  );
};

export default DrawerComp;
