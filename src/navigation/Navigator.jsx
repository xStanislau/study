import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import ForgotForm from "../components/Forms/ForgotPasswordForm/ForgotPasswordForm";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/login"
        render={props => {
          return <Login form={LoginForm} />;
        }}
      />
      <Route
        exact
        path="/forgot"
        render={props => {
          return <Login form={ForgotForm} />;
        }}
      />
      <Route path="/profile" component={PrivateRoutes} />
      <Route component={() => <h1>Page not found</h1>} />
    </Switch>
  );
};
