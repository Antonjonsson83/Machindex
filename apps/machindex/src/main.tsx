import React from "react";
import ReactDOM from "react-dom/client";
import "geist/font/sans";
import "geist/font/mono";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/barlow-semi-condensed/400.css";
import "@fontsource/barlow-semi-condensed/500.css";
import "@fontsource/barlow-semi-condensed/600.css";
import "./styles/index.css";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
