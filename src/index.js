import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { LogProvider } from "./contexts/LogContext";
import App from "./components/App/App";
import "normalize.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <LogProvider>
      <App />
    </LogProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
