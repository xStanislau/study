import React from "react";
import OverviewCard from "./components/OverviewCard/OverviewCard";
import { Row, Container } from "react-bootstrap";

const Overview = () => {
  return (
    <section className="d-flex overview">
      <Container>
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
