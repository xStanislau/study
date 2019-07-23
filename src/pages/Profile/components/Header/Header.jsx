import React from "react";
import "./Header.scss";
import Searchbar from "./components/Searchbar/Searchbar";
import Nav from "./components/Nav/Nav";
import Account from "./components/Account/Account";

const DashBoardHeader = () => {
  return (
    <header className="dashboard-header ">
      <div className="row justify-content-between align-items-center">
        <Nav />
        <div className="col-6">
          <div className="d-flex justify-content-end align-items-center">
            <Searchbar />
            <Account />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashBoardHeader;
