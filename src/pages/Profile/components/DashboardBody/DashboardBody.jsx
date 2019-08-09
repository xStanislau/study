import React from "react";
import Overview from "./components/Overview/Overview";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Secondary from "./components/Secondary/Secondary";
import Article from "./components/News/components/Article/Article";
import News from "./components/News/News";
import "./DashboardBody.scss";

const DashboardBody = ({ overview, activity }) => {
  return (
    <Container fluid className="dashboard-body dashboard-right">
      <Switch>
        <Route
          path="/profile"
          component={() => {
            return (
              <>
                <Overview {...overview} />
                <Secondary activity={activity} />
              </>
            );
          }}
        />
        <Route exact path="/profile/news" component={News} />
        <Route path="/profile/news/:id" component={Article} />
      </Switch>
    </Container>
  );
};

export default DashboardBody;
