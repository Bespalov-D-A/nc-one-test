import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
    body2: {
      fontSize: 20,
    },
    body1: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h1: {
      textAlign: "center",
      fontFamily: "Anek Telugu",
      fontSize: "32px",
      lineHeight: "100%",
      transform: "translateY(6px)",
      letterSpacing: "1px",
    },
  },
  palette: {
    primary: {
      light: "#FFCC26",
      main: "#FFCC26",
      dark: "#FFCC26",
      contrastText: "#414141",
    },
    secondary: {
      light: "#414141",
      main: "#414141",
      dark: "#414141",
      contrastText: "#fff",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          backgroundColor: "#fff",
          boxShadow: "none",
        },
      },
    },
  },
});
