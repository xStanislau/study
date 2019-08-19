import React from "react";
import { Media } from "react-bootstrap";
import "./Activity.scss";
import ActivityTitle from "./ActivityTitle";

const Activity = ({ operation, time, status }) => {
  return (
    <Media className="activity">
      <img
        className="activity__user-img rounded-circle "
        src="https://place-hold.it/48x48"
        alt="Generic placeholder"
      />
      <Media.Body>
        <ActivityTitle status={status}>User</ActivityTitle>
        <div className="activity__info">
          <span className="activity__operation">{operation}</span>
          <i className="activity__time">{time} ago</i>
        </div>
      </Media.Body>
    </Media>
  );
};

export default Activity;
