import { createGlobalState } from "react-hooks-global-state";
import { Iimage, Iproduct } from "../config/types";

interface IinitialState {
  title: string;
  products: Iimage[];
  favoriteProductsIds: number[];
  favoriteProducts: Iimage[];
}

const initialState: IinitialState = {
  title: "Product list page",
  products: [],
  favoriteProductsIds: [],
  favoriteProducts: [],
};
export const { useGlobalState } = createGlobalState(initialState);
