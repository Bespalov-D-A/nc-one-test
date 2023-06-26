import { RouterProvider } from "react-router-dom";
import { router } from ".";

//Инициализация роутинга приложения
const Routing = () => {
	return <RouterProvider router={router} />;
};

export default Routing;
