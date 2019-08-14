import React from "react";
import UserActivity from "./components/UserActivity/UserActivity";
import Chart from "./components/Chart/Chart";
import "./Secondary.scss";
import { Row, Col, Container } from "react-bootstrap";

const Secondary = ({ activity }) => {
  return (
    <section className="secondary">
      <Container fluid>
        <Row>
          <Col>
            <h2 className="secondary__title h2">Secondary</h2>
          </Col>
        </Row>
        <Row>
          <Chart />
          <UserActivity activity={activity} />
        </Row>
      </Container>
    </section>
  );
};

export default Secondary;
