import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, type, className, children, disabled }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
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