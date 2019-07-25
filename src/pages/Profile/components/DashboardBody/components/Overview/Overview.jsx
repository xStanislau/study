import React from "react";
import OverviewCard from "./components/OverviewCard/OverviewCard";
import { Row, Container } from "react-bootstrap";
import "./Overview.scss";

const Overview = ({ chidren }) => {
  return (
    <section className="d-flex overview">
      <Container fluid>
        <h2 className="overview__title">Overview</h2>
        <Row>
          <OverviewCard
            title="Overall Sale"
            number="1231"
            iconName="tag"
            blue
          />
          <OverviewCard
            title="Overall Visited"
            number="1231"
            iconName="user"
            orange
          />
          <OverviewCard
            title="Overall Growth"
            number="1231"
            iconName="tag"
            green
          />
        </Row>
      </Container>
    </section>
  );
};

export default Overview;
