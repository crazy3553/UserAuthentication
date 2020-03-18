import React from "react";
import { App } from "./App/App";
import { render } from "react-dom";
import { Provider } from "react-redux";

render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
