import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./AccordionSubItem.scss";
import PropTypes from "prop-types";

const AccordionSubItem = ({ children, name, to, color }) => {
  return (
    <NavLink
      to={{ pathname: to, state: { prevPath: "/profile/news" } }}
      className="d-flex align-items-center justify-content-start sidebar-sub-item"
      activeClassName="sidebar-sub-item_active"
    >
      <Icon
        name={name}
        className={`${color && color} sidebar-sub-item__icon`}
      />
      <span className="sidebar-sub-item__text">{children}</span>
    </NavLink>
  );
};

AccordionSubItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
};

export default AccordionSubItem;
