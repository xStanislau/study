import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import Logo from "../../../../components/Logo/Logo";
import Button from "../../../../components/Button/Button";

const MainHeader = ({ className }) => {
  return (
    <Header className={`${className} `}>
      <section className="wrapper d-flex justify-content-between align-items-center">
        <Logo className="logo">Logo</Logo>
        <div className="text-white">
          <Link to="/profile" className="profile mr-3 text-white">
            Profile
          </Link>
          <Link to="/auth">
            <Button className="btn btn-outline-light rounded-0">Login</Button>
          </Link>
        </div>
      </section>
    </Header>
  );
};

export default MainHeader;
