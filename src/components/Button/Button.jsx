import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Loader from "../Loader/Loader";
import "./Button.scss";

const Button = ({
  onClick,
  type,
  className,
  children,
  disabled,
  isLoad,
  ...attrs
}) => {
  const classes = classNames("btn", className, { disabled });
  return (
    <button
      {...attrs}
      className={classes}
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

export const ButtonWithLoader = Loader(Button);

export default Button;
