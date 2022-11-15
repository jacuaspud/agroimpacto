import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Etiqueta } from "./Etiqueta.js";
import { Header } from "./header.js";
import { Hero } from "./componentes/Hero.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Etiqueta />
        <Header />
        <Hero />
    </React.StrictMode>
);

reportWebVitals();
