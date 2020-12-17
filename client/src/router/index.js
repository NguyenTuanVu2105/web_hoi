import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { PathConstant } from "../const";
import DashboardPage from "../pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route component={DashboardPage} exact path={PathConstant.ROOT} />
    </Switch>
  );
};

export default Routes;
