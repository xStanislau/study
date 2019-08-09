import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import Icon from "../../../../components/Icon/Icon";
import "./Account.scss";

const Account = ({ userName }) => {
  const className = "account";
  return (
    <div className={`${className} d-flex align-items-center`}>
      <Icon className={`${className}__icon`} name="user" size="25" />
      <span className={`${className}__user-name`}>{userName}</span>
      <Link to="/logout">
        <Button className="btn btn-light rounded-0">Logout</Button>
      </Link>
    </div>
  );
};

export default Account;
