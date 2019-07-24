import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../../../../../../../../components/Icon/Icon";
import cx from "classnames";
import "./OverviewCard.scss";

const OverviewCard = ({ title, number, iconName, blue, orange, green }) => {
  const classNames = cx("overview-card", { blue, orange, green });
  return (
    <Col>
      <Card className={classNames}>
        <Card.Header className="overview-card__header">
          <Icon name={iconName} />
          <Link to="#">View detail</Link>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{number}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OverviewCard;
