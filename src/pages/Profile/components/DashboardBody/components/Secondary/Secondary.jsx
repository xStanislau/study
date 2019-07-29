import React from "react";
import UserActivity from "./components/UserActivity/UserActivity";
import Chart from "./components/Chart/Chart";
import "./Secondary.scss";
import { Row, Col } from "react-bootstrap";

const Secondary = ({ activity }) => {
  return (
    <section className="secondary">
      <Row>
        <Col>
          <h2 className="secondary__title">Secondary</h2>
        </Col>
      </Row>
      <Row>
        <Chart />
        <UserActivity activity={activity} />
      </Row>
    </section>
  );
};

export default Secondary;
