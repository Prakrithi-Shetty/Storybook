import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import LogInSignUp from "../views/LogInSignUp/LogInSignUp";
import Dashboard from "../views/Dashboard/Dashboard";
import history from "../constants/history/history";

class AppRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={LogInSignUp} exact />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default AppRoutes;
