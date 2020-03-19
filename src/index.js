import React from "react";
import { App } from "./App/App";
import { render } from "react-dom";
import { Provider } from "react-redux";
import {store} from './_helpers';
import "./Assets/Style/style.css";
import  "bootstrap/dist/css/bootstrap.min.css";
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
