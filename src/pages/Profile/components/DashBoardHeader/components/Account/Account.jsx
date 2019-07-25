import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../../../components/Button/Button";
import Icon from "../../../../../../components/Icon/Icon";
import "./Account.scss";

const Account = ({ text }) => {
  return (
    <div className="d-flex align-items-center account">
      <Icon className="account__icon" name="user" size="25" />
      <Link to="/logout">
        <Button className="btn btn-light rounded-0">Logout</Button>
      </Link>
    </div>
  );
};

export default Account;
