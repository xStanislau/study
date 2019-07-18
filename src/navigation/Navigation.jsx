import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import Login from "../pages/Login/components/Login";
import Main from "../pages/Main/Main";
import createStore from "../redux/store/store";

const store = createStore();

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* edits */}
          {/* /main-page -> / */}
          {/* /auth -> /login */}
          {/* Main -> Home */}
          <Redirect exact from="/" to="/auth" />
          <Route path="/auth" component={Login} />
          <Route exact path="/main-page" component={Main} />
          <Route exact component={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    </Provider>
  );
};
