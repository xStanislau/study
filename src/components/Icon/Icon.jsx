import React from "react";
import classNames from "classnames";

const Icon = ({ name, className, onClick, size, disabled }) => {
  const elemSize = size ? { fontSize: `${size}px` } : null;
  const classes = classNames("fa", `fa-${name}`, className);

  return (
    <i
      className={classes}
      onClick={disabled ? null : onClick}
      style={elemSize}
    />
  );
};

export default Icon;
