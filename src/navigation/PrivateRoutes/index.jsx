import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import News from "../../pages/News/News";
import Article from "../../components/Article/Article";
import Dashboard from "../../layout/Dashboard/Dashboard";

const PrivateRoutes = ({ isAuthorized, ...rest }) => {
  debugger;
  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Dashboard>
        <Switch>
          <Redirect exact from="/profile/dashboard" to="/profile/dashboard/1" />
          <Redirect exact from="/profile" to="/profile/dashboard/1" />
          <Route exact path="/profile/dashboard/:id" component={Profile} />
          <Route exact path="/profile/news" component={News} />
          <Route exact path="/profile/news/:id" component={Article} />
          <Route component={() => <h1>Page not found 404</h1>} />
        </Switch>
      </Dashboard>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized
  };
};

export default connect(
  mapStateToProps,
  null
)(PrivateRoutes);
