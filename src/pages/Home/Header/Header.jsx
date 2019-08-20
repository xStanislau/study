import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Logo from "../../../components/Logo/Logo";
import Button from "../../../components/Button/Button";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.scss";
import { bindActionCreators } from "redux";
import { logOut } from "../../../redux/reducers/auth";

const MainHeader = ({ className, isAuthorized }) => {
  const [isOpen, toggleMenu] = useState(false);
  const body = document.querySelector("body");

  if (isOpen) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      toggleMenu(false);
    }
  });

  return (
    <Header className={`${className}`}>
      <div className="wrapper d-flex ">
        <Navbar expand="lg" className="justify-content-between w-100">
          <Navbar.Brand className="z-index-3" href="#home">
            <Logo className="logo">
              <img src="/images/react.svg" alt="logo" />
              Logo
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle
            className="main-header__burger z-index-3"
            aria-controls="basic-navbar-nav"
            onClick={() => {
              toggleMenu(!isOpen);
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
            <Nav className="main-header__links  w-100 align-items-center ">
              <NavLink
                to="/"
                className="main-header__profile-link"
                activeClassName="isActive"
              >
                Home
              </NavLink>
              <NavLink
                to="/#"
                className="main-header__profile-link"
                activeClassName="isActive"
              >
                About us
              </NavLink>
              <NavLink
                to="/#"
                className="main-header__profile-link"
                activeClassName="isActive"
              >
                Contacts
              </NavLink>
              <NavLink
                to="/profile"
                className="main-header__profile-link"
                activeClassName="isActive"
              >
                Profile
              </NavLink>
              {isAuthorized ? (
                <div className="login-btn">
                  {
                    <Button
                      className="btn btn-outline-light rounded-0"
                      onClick={logOut}
                    >
                      Logout
                    </Button>
                  }
                </div>
              ) : (
                <Link to="/login" className="login-btn">
                  {
                    <Button className="btn btn-outline-light rounded-0">
                      Login
                    </Button>
                  }
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Header>
  );
};

const mapStatToProps = state => {
  return { isAuthorized: state.auth.isAuthorized };
};

const mapDispatchToProps = dispatch => ({
  logOut: bindActionCreators(logOut, dispatch)
});

export default connect(
  mapStatToProps,
  mapDispatchToProps
)(MainHeader);
