import React from "react";
import PropTypes from "prop-types";
import "./Logo.scss";

const Logo = ({ onClick, className, children }) => {
  return (
    <h4 className={className} onClick={onClick}>
      {children}
    </h4>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Logo;
