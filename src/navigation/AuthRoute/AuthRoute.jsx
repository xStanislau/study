import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = Route => props => {
  const { isAuthorized } = props;

  if (!isAuthorized) {
    return <Redirect to="login" />;
  }

  return <Route {...props} />;
};

export default AuthRoute(Route);
