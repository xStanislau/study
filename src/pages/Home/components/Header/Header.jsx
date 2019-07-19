import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import Logo from "../../../../components/Logo/Logo";
import Button from "../../../../components/Button/Button";

const MainHeader = ({ className }) => {
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
          <Link to="/login">
            <Button className="btn btn-outline-light rounded-0">Login</Button>
          </Link>
        </div>
      </section>
    </Header>
  );
};

export default MainHeader;
