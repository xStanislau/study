import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/components/Login";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";

export default () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <PrivateRoutes />
      <Route exact component={() => <h1>Page not found</h1>} />
    </Switch>
  );
};
