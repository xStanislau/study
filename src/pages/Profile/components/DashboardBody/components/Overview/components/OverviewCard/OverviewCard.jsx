import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../../../../../../../../components/Icon/Icon";
import "./OverviewCard.scss";

const OverviewCard = ({ title, number, iconName, color }) => {
  const className = "overview-card";

  return (
    <Col>
      <Card className={`${className} ${className}_${color}`}>
        <Card.Header className={`${className}__header`}>
          <Icon className={`${className}__header-icon`} name={iconName} />
          <Link className={`${className}__header-link`} to="#">
            View detail
          </Link>
        </Card.Header>
        <Card.Body className={`${className}__body`}>
          <div>{`//today`}</div>
          <Card.Title className={`${className}__title`}>{title}</Card.Title>
          <Card.Text className={`${className}__number`}>{number}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OverviewCard;
