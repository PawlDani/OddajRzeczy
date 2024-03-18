// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import "./styles/main.scss"; // Add this line to import your main stylesheet
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
