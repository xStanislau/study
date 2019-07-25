import React from "react";
import { Card, Col } from "react-bootstrap";
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
          <Icon className="overview-card__header-icon" name={iconName} />
          <Link className="overview-card__header-link" to="#">
            View detail
          </Link>
        </Card.Header>
        <Card.Body>
          <div>{`//today`}</div>
          <Card.Title className="overview-card__title">{title}</Card.Title>
          <Card.Text className="overview-card__number">{number}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OverviewCard;
