import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark", // 🌙 MODO OSCURO
    primary: {
      main: "#4FC3F7", // azul claro bancario
    },
    secondary: {
      main: "#38ada9",
    },
    background: {
      default: "#0F172A", // fondo general
      paper: "#020617",   // cards
    },
  },
  shape: {
    borderRadius: 14,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);