import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Header.scss";

class Header extends React.Component {
  state = {};

  handleScroll = () => {
    this.setState({ scroll: window.scrollY });
  };

  componentDidMount() {
    const el = document.querySelector(".header");
    this.setState({ top: el.offsetTop, height: el.scrollHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { className, children } = this.props;
    const fixed = this.state.scroll > this.state.top ? "fixed" : "";
    const classes = classNames("header", className, { fixed });

    return <header className={classes}>{children}</header>;
  }
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Header;
