import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/components/Login";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import ForgotForm from "../components/Forms/ForgotPasswordForm/ForgotPasswordForm";

export default () => {
  return (
    <Switch>
      <Route
        path="/login"
        render={props => {
          return <Login form={LoginForm} />;
        }}
      />
      <Route
        path="/forgot"
        render={props => {
          return <Login form={ForgotForm} />;
        }}
      />
      <Route exact path="/" component={Home} />
      <PrivateRoutes />
      <Route exact component={() => <h1>Page not found</h1>} />
    </Switch>
  );
};
