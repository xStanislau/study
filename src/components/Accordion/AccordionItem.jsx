import React from "react";
import Icon from "../Icon/Icon";
import "./AccordionItem.scss";
import PropTypes from "prop-types";

const AccordionItem = ({ text, name, size }) => {
  return (
    <div className="d-flex align-items-center justify-content-start sidebar-item">
      <Icon name={name} size={size} className="sidebar-item__icon" />
      <span className="sidebar-item__text">{text}</span>
      <Icon className="sidebar-item__icon-angle" name="angle-right" size="20" />
    </div>
  );
};

AccordionItem.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string
};

export default AccordionItem;
