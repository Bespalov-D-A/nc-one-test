import { createHashRouter, NonIndexRouteObject } from "react-router-dom";
import App from "../App";
import { routes } from "./routes";

export const router = createHashRouter([
	{
		path: "/",
		element: App,
		children: routes as NonIndexRouteObject[],
	},
]);
