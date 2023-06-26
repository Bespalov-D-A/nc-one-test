import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React, { ReactElement } from "react";
import { theme } from "../../shared/Theme";

interface IWithStyled {
  component: React.ReactNode | ReactElement;
}

//здесь мы можем использовать кастомизированную тему, оборачиваем ей приложение
//Оборачиваем приложение StyledEngine что бы css был выше mui cssInJ
//Мы так же можем управлять темой если добавим токены которые будем менять
const WithMuiStyled: React.FC<IWithStyled> = ({ component }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </CssBaseline>
    </StyledEngineProvider>
  );
};
export default WithMuiStyled;
