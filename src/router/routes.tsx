import { ProductItemPage } from "../pages/ProductItemPage";
import { ProductsPage } from "../pages/Products";
import { RootPage } from "../pages/RootPage";

export const routes = [
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: "product", element: <ProductItemPage /> },
    ],
  },
];
