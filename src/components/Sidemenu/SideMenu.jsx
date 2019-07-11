import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./SideMenu.css"
const SideMenu = ({ className, children }) => {
  const classes = classNames("side-menu d-flex flex-column", className);
  return <nav className={classes}>{children}</nav>;
};

SideMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default SideMenu;