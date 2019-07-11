import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./SideMenu.scss";

const SideMenu = ({ className, children, isOpen }) => {
  const classes = classNames("side-menu", className, { open: isOpen });
  return (
    <Fragment>
      {isOpen && <div className="side-menu-bg" />}
      <nav className={classes}>{children}</nav>
    </Fragment>
  );
};

SideMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default SideMenu;
