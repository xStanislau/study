import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps ={
    className: 'header'
};

export default Header;