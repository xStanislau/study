import React from "react";
import Overview from "./components/Overview/Overview";
import { Container } from "react-bootstrap";
import Secondary from "./components/Secondary/Secondary";
import "./DashboardBody.scss";

const DashboardBody = ({ overview, activity }) => {
  return (
    <Container fluid className="dashboard-body dashboard-right">
      <Overview {...overview} />
      <Secondary activity={activity} />
    </Container>
  );
};

export default DashboardBody;
