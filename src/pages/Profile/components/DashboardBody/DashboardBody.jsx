import React from "react";
import Overview from "./components/Overview/Overview";
import { Container, Row, Badge } from "react-bootstrap";
import UserActivity from "./components/Secondary/components/UserActivity/UserActivity";
import Chart from "./components/Secondary/components/Chart/Chart";
import Secondary from "./components/Secondary/Secondary";

import "./DashboardBody.scss";

const DashboardBody = ({ overview, activity }) => {
  return (
    <Container fluid className="dashboard-body">
      <Overview {...overview} />
      <Secondary activity={activity} />
    </Container>
  );
};

export default DashboardBody;
