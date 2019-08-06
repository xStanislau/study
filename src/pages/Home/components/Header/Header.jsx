import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import Logo from "../../../../components/Logo/Logo";
import Button from "../../../../components/Button/Button";

import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.scss";

const MainHeader = ({ className, isAuthorized }) => {
  const [isOpen, toggleMenu] = useState(false);
  const body = document.querySelector("body");
  if (isOpen) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
  return (
    <Header className={`${className} `}>
      <section className="wrapper d-flex ">
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
          <Navbar.Collapse id="basic-navbar-nav">
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
                <Link to="/logout" className="login-btn">
                  {
                    <Button className="btn btn-outline-light rounded-0">
                      Logout
                    </Button>
                  }
                </Link>
              ) : (
                <Link to="/login" className="login-btn">
                  {
                    <Button className="btn btn-outline-light rounded-0">
                      Login
                    </Button>
                  }
                </Link>
              )}
              {/* </div> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/*  */}
      </section>
    </Header>
  );
};

const mapStatToProps = state => {
  return { isAuthorized: state.auth.isAuthorized };
};

export default connect(
  mapStatToProps,
  null
)(MainHeader);
