import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../../../../components/Icon/Icon";

import "./OverviewCard.scss";
import capitalize from "../../../../utils/capitalize";

const OverviewCard = ({ title, number, iconName, color }) => {
  const className = "overview-card";
  return (
    <Col className="overview__overview-card col-4">
      <Card className={`${className} ${className}_${color}`}>
        <Card.Header className={`${className}__header`}>
          <Icon className={`${className}__header-icon`} name={iconName} />
          <Link className={`${className}__header-link`} to="#">
            View detail
          </Link>
        </Card.Header>
        <Card.Body className={`${className}__body`}>
          <div className={`${className}__time`}>{`//today`}</div>
          <Card.Title className={`${className}__title`}>{`Overall ${capitalize(
            title
          )}`}</Card.Title>
          <Card.Text className={`${className}__number`}>{number}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OverviewCard;
