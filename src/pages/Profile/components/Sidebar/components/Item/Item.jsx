import React from "react";
import "./Item.scss";
import Icon from "../../../../../../components/Icon/Icon";

const SidebarItem = ({ text, name }) => {
  return (
    <div className="d-flex align-items-center justify-content-between sidebar-item">
      <Icon name={name} size="25" className="sidebar-item__icon" />
      <span className="sidebar-item__text">{text}</span>
      <Icon className="sidebar-item__angle" name="angle-right" size="25" />
    </div>
  );
};

export default SidebarItem;
