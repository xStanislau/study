import React from "react";
import { Container } from "react-bootstrap";
import Searchbar from "./components/Searchbar/Searchbar";
import Nav from "./components/Nav/Nav";
import Account from "./components/Account/Account";
import "./DashBoardHeader.scss";

const DashBoardHeader = ({ notifications, emails }) => {
  return (
    <header className="dashboard-header ">
      <Container fluid>
        <div className="row justify-content-between align-items-center">
          <Nav notifications={notifications} emails={emails} />
          <div className="col-6">
            <div className="d-flex justify-content-end align-items-center">
              <Searchbar />
              <Account />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default DashBoardHeader;
