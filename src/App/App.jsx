import React, { Component } from "react";
import { Router, Route, BrowserRouter } from "react-router-dom";
import { Registration } from "../Components/Registration/Registration";
import { Login } from "../Components/Login/Login";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { history, store } from "../_helpers";
import { CheckAdminAccount } from "../_actions";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router history={history}>
          <Route exact Route path="/" component={Login} />
          <Route exact Route path="/Login" component={Login} />
          <Route exact Route path="/Registration" component={Registration} />
          <Route exact Route path="/Dashboard" component={Dashboard} />
        </Router>
      </BrowserRouter>
    );
  }
}
