import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import News from "../../pages/News/News";
import Article from "../../pages/News/Article/Article";
import Dashboard from "../../layout/Dashboard/Dashboard";

const PrivateRoutes = ({ isAuthorized, ...rest }) => {
  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Route exact path="/profile" component={Dashboard} />

      <Route exact path="/profile/dashboard" component={Dashboard} />
      <Route
        exact
        path="/profile/dashboard/:id"
        render={props => {
          return (
            <Dashboard {...props}>
              <Profile {...props} />
            </Dashboard>
          );
        }}
      />
      <Route
        exact
        path="/profile/news"
        render={props => {
          return (
            <Dashboard {...props}>
              <News {...props} />
            </Dashboard>
          );
        }}
      />
      <Route
        exact
        path="/profile/news/:id"
        render={props => {
          return (
            <Dashboard {...props}>
              <Article {...props} />
            </Dashboard>
          );
        }}
      />
      <Route component={() => <h1>Page not found 404</h1>} />
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
