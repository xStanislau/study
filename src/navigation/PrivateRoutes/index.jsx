import React from "react";
import { Route, Redirect } from "react-router-dom";
import checkAuth from "../../utils/checkAuth";
import Profile from "../../pages/Profile/Profile";
import News from "../../pages/Home/components/News/News";
import Article from "../../pages/Home/components/News/components/Article/Arcticle";

const PrivateRoutes = () => {
  const isAuthorized = checkAuth();

  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Route path="/profile" component={Profile} />
      <Route exact path="/news" component={News} />
      <Route path="/news/:id" component={Article} />
    </div>
  );
};

export default PrivateRoutes;
