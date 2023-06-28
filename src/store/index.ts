import { createGlobalState } from "react-hooks-global-state";
import { Iimage, Iproduct } from "../config/types";

interface IinitialState {
  products: Iimage[];
  favoriteProductsIds: number[];
  favoriteProducts: Iimage[];
  drawerOpen: boolean;
}

const initialState: IinitialState = {
  products: [],
  favoriteProductsIds: [],
  favoriteProducts: [],
  drawerOpen: false,
};
export const { useGlobalState } = createGlobalState(initialState);
