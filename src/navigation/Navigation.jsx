import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "../pages/Login/components/Login";
import Home from "../pages/Home/Home";
import createStore from "../redux/store/store";

const store = createStore();

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact component={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    </Provider>
  );
};
