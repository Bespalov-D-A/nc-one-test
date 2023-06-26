import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { theme } from "../../shared/Theme";

interface IWithStyled {
	component: React.ReactNode;
}

//импортируем кастомизированную тему, оборачиваем ей приложение
//Оборачиваем приложение StyledEngine что бы css был выше mui cssInJ
const WithMuiStyled: React.FC<IWithStyled> = ({ component }) => {
	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline>
				<ThemeProvider theme={theme}>
					{component}
				</ThemeProvider>
			</CssBaseline>
		</StyledEngineProvider>
	);
};
export default WithMuiStyled;
