import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import classNames from "classnames";

class Header extends React.Component {
  state = {};

  handleScroll = () => {
    this.setState({ scroll: window.scrollY });
  };

  componentDidMount() {
    const el = document.querySelector(".header");
    this.setState({ top: el.offsetTop + 200 });
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { className, children } = this.props;
    const fixed = this.state.scroll > this.state.top ? "fixed" : "";
    const classes = classNames("header", className, { fixed });

    return <div className={classes}>{children}</div>;
  }
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Header;
