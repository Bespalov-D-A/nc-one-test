import { ProductsPage } from "../pages/Products";
import { RootPage } from "../pages/RootPage";

export const routes = [
	{
		path: "/",
		element: <RootPage />,
		children: [{ index: true, element: <ProductsPage /> }],
	},
];
