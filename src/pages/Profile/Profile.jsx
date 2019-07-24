import React, { Component } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./Profile.scss";
import DashboardBody from "./components/DashboardBody/DashboardBody";

class Profile extends Component {
  render() {
    return (
      <div className="containter-fluid dashboard">
        <div className="row">
          <Sidebar />
          <div className="col right-col">
            <Header />
            {/* <main className="dashboard-content">some content</main> */}
            <DashboardBody />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
