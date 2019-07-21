import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkAuth from "../../utils/checkAuth";

const AuthRoute = Route => props => {
  const isAuthorized = checkAuth();
  if (!isAuthorized) {

    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default AuthRoute(Route);
