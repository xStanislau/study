import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "../pages/Login/components/Login";
import Main from "../pages/Main/Main";
export default () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/auth" />
        <Route path="/auth" component={Login} />
        <Route exact path="/main-page" component={Main} />
        <Route exact component={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  );
};
