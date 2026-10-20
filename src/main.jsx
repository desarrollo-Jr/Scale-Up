
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./assets/styles/global.css";
import "./assets/styles/navbar.css";
import "./assets/styles/hero.css";
import "./assets/styles/secciones.css";
import "./assets/styles/responsive.css";
import "./assets/styles/instructores.css"

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


