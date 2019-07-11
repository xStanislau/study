import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Item.scss";

const Item = props => {
  const { className, children } = props;
  const classes = classNames("menu-item", className);
  return <li className={classes}>{children}</li>;
};

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Item;
