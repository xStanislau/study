import React from "react";
import Overview from "./components/Overview/Overview";
import { Container, Row, Badge } from "react-bootstrap";
import UserActivity from "./components/Secondary/components/UserActivity/UserActivity";
import Chart from "./components/Secondary/components/Chart/Chart";
import "./DashboardBody.scss";

const DashboardBody = ({ overview }) => {
  return (
    <Container fluid className="dashboard-body">
      <Overview />
      <Row>
        <Chart />
        <UserActivity />
      </Row>
    </Container>
  );
};

export default DashboardBody;
