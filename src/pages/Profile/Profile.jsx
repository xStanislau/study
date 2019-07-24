import React from "react";
import Header from "./components/Header/Header";
import "./Profile.scss";
import Sidebar from "./components/Sidebar/Sidebar";

const Profile = () => {
  return (
    <div className="containter-fluid dashboard">
      <div className="row">
        <Sidebar />
        <main className="col content">
          <Header />
        </main>
      </div>
    </div>
  );
};

export default Profile;
