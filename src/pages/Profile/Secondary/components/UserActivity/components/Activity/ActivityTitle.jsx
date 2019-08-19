import React from "react";

const ActivityTitle = ({ children, status }) => {
  return <h6 className={`${status} activity__title`}>{children}</h6>;
};

export default ActivityTitle;
