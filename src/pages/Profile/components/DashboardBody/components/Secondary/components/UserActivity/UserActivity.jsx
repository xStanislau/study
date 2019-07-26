import React from "react";
import Activity from "./components/Activity/Activity";
import mockData from "../../../../../../../../mocks/mocks";
import formatTime from "../../../../../../../../utils/formatDate";
import "./UserActivity.scss";
import { Col, Card } from "react-bootstrap";
import Button from "../../../../../../../../components/Button/Button";

const UserActivity = ({ props }) => {
  const activity = mockData.dashboardData.data.activity;

  return (
    <Col className="col-4">
      <Card className="user-activity">
        <Card.Header>
          <h5 className="user-activity__title">User Activity</h5>
        </Card.Header>
        <Card.Body className="user-activity__body">
          {activity.map((element, index) => {
            return (
              <Activity
                key={`${element.operation} ${index}`}
                operation={element.operation}
                time={formatTime(element.time)}
              />
            );
          })}
          <Button className="rounded-0">VIEW MORE</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserActivity;
