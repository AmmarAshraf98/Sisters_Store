import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { theme } from "./Theme";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state/store";
const store = configureStore({
  reducer: { cart: cartReducer },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
