
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/global/global.css";
import "./assets/styles/global/navbar.css";
import "./assets/styles/global/responsive.css";
import "./assets/styles/global/secciones.css";
import "./assets/styles/home/compartidos.css";

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
