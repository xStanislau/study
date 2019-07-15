import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import Icon from "../../../../components/Icon/Icon";
import Logo from "../../../../components/Logo/Logo";
import Button from "../../../../components/Button/Button";

const MainHeader = () => {
  return (
    <Header className="d-flex justify-content-between align-items-center">
      <Logo className="logo">Logo</Logo>
      <div>
        <Link to="/profile" className="mr-3">
          Profile
        </Link>
        <Link to="/auth">
          <Button className="btn btn-outline-light">Login</Button>
        </Link>
      </div>
    </Header>
  );
};

export default MainHeader;
