import React from "react";
import { Badge } from "react-bootstrap";
import "./TimeBadge.scss";

const TimeBadge = ({ text, color }) => {
  const className = "time-badge";
  return (
    <Badge pill className={`${className} ${className}_${color}`}>
      {text}
    </Badge>
  );
};

export default TimeBadge;
