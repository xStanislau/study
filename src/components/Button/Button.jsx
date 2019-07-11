import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";
const Button = ({ onClick, type, className, children, disabled, ...attrs }) => {
  return (
    <button
      {...attrs}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  type: "text",
  className: "btn",
  children: "Button",
  disabled: false
};

export default Button;
