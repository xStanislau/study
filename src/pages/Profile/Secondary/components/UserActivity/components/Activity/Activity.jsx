import React from "react";
import { Media } from "react-bootstrap";
import "./Activity.scss";

const Activity = ({ operation, time }) => {
  return (
    <Media className="activity">
      <img
        className="activity__user-img rounded-circle "
        src="https://place-hold.it/48x48"
        // 48x48 format ???
        alt="Generic placeholder"
      />
      <Media.Body>
        <h6 className="activity__title">User</h6>
        <div className="activity__info">
          <span className="activity__operation">{operation}</span>
          <i className="activity__time">{time} ago</i>
        </div>
      </Media.Body>
    </Media>
  );
};

export default Activity;
