import React, { PureComponent } from "react";
import { Col, Card } from "react-bootstrap";
import formatTime from "../../../../../utils/formatDate";
import Activity from "./components/Activity/Activity";
import Button from "../../../../../components/Button/Button";
import mockData from "../../../../../mocks/mocks";
import "./UserActivity.scss";

class UserActivity extends PureComponent {
  state = {
    elementsShowed: 4,
    step: 2,
    isVisible: true
  };

  viewMore = () => {
    const length = this.props.activity.length;
    const { elementsShowed } = this.state;
    let { step } = this.state;

    if (this.state.elementsShowed === length) return;

    if (length - elementsShowed > 4) {
      this.setState(state => {
        return { elementsShowed: state.elementsShowed + step };
      });
    } else {
      this.setState(state => {
        step = length - elementsShowed;
        return {
          elementsShowed: state.elementsShowed + step,
          isVisible: false
        };
      });
    }
  };

  render() {
    const { activity } = this.props;
    const { activity: activities } = mockData.dashboardData.data;
    return (
      <Col className="col-5">
        <Card className="user-activity">
          <Card.Header>
            <h5 className="user-activity__title">User Activity</h5>
            <div className="user-activity__menu">
              <div className="user-activity__menu-body" />
            </div>
          </Card.Header>
          <Card.Body className="user-activity__body">
            {activity &&
              new Array(this.state.elementsShowed)
                .fill(0)
                .map((element, index) => {
                  let status;
                  if (activities[index].status) {
                    status = activities[index].status;
                  }
                  status = activities[index].status;
                  return (
                    <Activity
                      key={`${activity[index].operation} ${index}`}
                      operation={activity[index].operation}
                      time={formatTime(activity[index].time)}
                      status={status}
                    />
                  );
                })}
            {this.state.isVisible && (
              <Button onClick={this.viewMore} className="rounded-0">
                VIEW MORE
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default UserActivity;
