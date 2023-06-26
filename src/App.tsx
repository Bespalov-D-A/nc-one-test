import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./styles/index.scss";
import { withProviders } from "./Providers";

//Входная точка приложения
const App: FC = () => {
	return <Outlet />;
};

//оборачиваем входной компонент App провайдерами
export default withProviders(() => <App />);
