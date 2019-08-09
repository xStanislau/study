import React from "react";
import "./SubItem.scss";
import { Link } from "react-router-dom";
import Icon from "../../../../components/Icon/Icon";

const Subitem = ({ children, name, to }) => {
  return (
    <Link
      to={to}
      className="d-flex align-items-center justify-content-start sidebar-sub-item"
    >
      <Icon name={name} className="sidebar-sub-item__icon" />
      <span className="sidebar-sub-item__text">{children}</span>
    </Link>
  );
};

export default Subitem;
