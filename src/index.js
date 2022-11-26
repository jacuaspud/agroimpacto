import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import { Etiqueta } from "./Etiqueta.js";
import { Header } from "./header.js";
import { Hero } from "./componentes/Hero.js";
import { Secproducto } from "./componentes/Secproducto.js";
import { Secempleos } from "./componentes/Secempleos.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Etiqueta />
        <Header />
        <Hero />
        <Secproducto />
        <Secempleos />
    </React.StrictMode>
);

reportWebVitals();
