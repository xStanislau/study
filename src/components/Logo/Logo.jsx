import React from "react";
import PropTypes from "prop-types";

const Logo = ({handleClick, type, className, children,}) => {
  return (
      <h4 className={className}>
        {children}
      </h4>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
;


export default Logo;