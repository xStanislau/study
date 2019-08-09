import React from "react";
import "./Item.scss";
import Icon from "../Icon/Icon";

const SidebarItem = ({ text, name, size }) => {
  return (
    <div className="d-flex align-items-center justify-content-start sidebar-item">
      <Icon name={name} size="25" className="sidebar-item__icon" />
      <span className="sidebar-item__text">{text}</span>
      <Icon className="sidebar-item__icon-angle" name="angle-right" size="20" />
    </div>
  );
};

export default SidebarItem;
