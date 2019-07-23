import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <Link to="/logout">
      <Button className="btn btn-primary">Logout</Button>
    </Link>
  );
};

export default Profile;
