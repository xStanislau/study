import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import OverviewCard from "./OverviewCard/OverviewCard";
import TimeBadge from "./TimeBadge/TimeBadge";
import "./Overview.scss";
import mockData from "../../../mocks/mocks";

const Overview = props => {
  const { timeBadges, data } = mockData.dashboardData;
  const { colors, iconNames } = data.overview;
  const className = "overview";

  return (
    <section className={`${className} d-flex`}>
      <Container fluid>
        <Row className="justify-content-between">
          <Col>
            <h2 className={`${className}__title`}>Overview</h2>
          </Col>
          <Col>
            <div className={`${className}__time ml-auto d-flex`}>
              {timeBadges.map(badge => {
                const { text, color } = badge;
                return <TimeBadge key={text} text={text} color={color} />;
              })}
            </div>
          </Col>
        </Row>
        <Row>
          {Object.keys(props).map((keyName, index) => {
            return (
              <OverviewCard
                key={`${keyName} ${index}`}
                title={keyName}
                number={props[keyName]}
                iconName={iconNames[index]}
                color={colors[index]}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Overview;
