import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import Logo from "../../../../components/Logo/Logo";
import Button from "../../../../components/Button/Button";
import { connect } from "react-redux";

const MainHeader = ({ className, isAuthorized }) => {
  return (
    <Header className={`${className} `}>
      <section className="wrapper d-flex justify-content-between align-items-center">
        <Logo className="logo">Logo</Logo>
        <div className="text-white">
          <NavLink
            to="/profile"
            className="profile mr-3 text-white"
            activeClassName="isActive"
          >
            Profile
          </NavLink>
          {isAuthorized ? (
            <Link to="/logout">
              {
                <Button className="btn btn-outline-light rounded-0">
                  Logout
                </Button>
              }
            </Link>
          ) : (
            <Link to="/login">
              {
                <Button className="btn btn-outline-light rounded-0">
                  Login
                </Button>
              }
            </Link>
          )}
        </div>
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
