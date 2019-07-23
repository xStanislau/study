import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../../../components/Icon/Icon";
import { Badge } from "react-bootstrap";
const NotificationIcon = ({ text, iconOptions }) => {
  return (
    <Link className="notification-icon">
      <Icon />
      <Badge pill variant="danger">
        {text}
      </Badge>
    </Link>
  );
};

export default NotificationIcon;
