import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { LogListProvider } from "./contexts/LogListContext";
import App from "./components/App/App";
import "normalize.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <LogListProvider>
      <App />
    </LogListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
