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

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height - 17}px`)
      : (document.body.style.paddingTop = 0);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
