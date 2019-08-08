import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="login-header d-flex justify-content-between">
      <Link to="/" className="link link-left">
        Home
      </Link>
      <div className="left-links">
        <Link to="/#" className="link">
          Contacts /
        </Link>
        <Link to="/#" className="link">
          Privacy
        </Link>
      </div>
    </header>
  );
};

export default Header;
