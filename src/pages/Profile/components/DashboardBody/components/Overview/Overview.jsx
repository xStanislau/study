import React from "react";
import { Row, Container } from "react-bootstrap";
import OverviewCard from "./components/OverviewCard/OverviewCard";
import TimeBadge from "./components/TimeBadge/TimeBadge";
import "./Overview.scss";
import mockData from "../../../../../../mocks/mocks";

const Overview = props => {
  debugger;
  const { timeBadges } = mockData.dashboardData;
  const className = "overview";
  const colors = ["blue", "orange", "green"];
  const iconNames = ["tag", "user", "tag"];
  return (
    <section className="d-flex overview">
      <Container fluid>
        <div className="d-flex justify-content-between">
          <h2 className={`${className}__title`}>Overview</h2>
          <div className={`${className}__time`}>
            {timeBadges.map(badge => {
              const { text, color } = badge;
              return <TimeBadge key={text} text={text} color={color} />;
            })}
          </div>
        </div>
        <Row>
          {Object.keys(props).map((keyName, i) => {
            return (
              <OverviewCard
                title={keyName}
                number={props[keyName]}
                iconName={iconNames[i]}
                color={colors[i]}
              />
            );
          })}
          {/* <OverviewCard
            title="Overall Sale"
            number="1231"
            iconName="tag"
            color="blue"
          />
          <OverviewCard
            title="Overall Visited"
            number="1231"
            iconName="user"
            color="orange"
          />
          <OverviewCard
            title="Overall Growth"
            number="1231"
            iconName="tag"
            color="green"
          /> */}
        </Row>
      </Container>
    </section>
  );
};

export default Overview;
