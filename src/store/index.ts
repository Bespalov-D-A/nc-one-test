import { createGlobalState } from "react-hooks-global-state";

const initialState = { title: "Product list page" };
export const { useGlobalState } = createGlobalState(initialState);
