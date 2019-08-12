import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import News from "../../pages/News/News";
import Article from "../../pages/News/Article/Article";
import Dashboard from "../../layout/Dashboard/Dashboard";

const PrivateRoutes = ({ isAuthorized }) => {
  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }
  return (
    <Dashboard>
      <Route path="/profile" component={Profile} />
      <Route exact path="/news" component={News} />
      <Route path="/news/:id" component={Article} />
    </Dashboard>
  );
};

const mapStateToProps = state => ({
  isAuthorized: state.auth.isAuthorized
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoutes);
