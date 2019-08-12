import React from "react";
import Button from "../../../../components/Button/Button";
import Icon from "../../../../components/Icon/Icon";
import "./Account.scss";

const Account = ({ userName, onClick }) => {
  const className = "account";
  return (
    <div className={`${className} d-flex align-items-center`}>
      <Icon className={`${className}__icon`} name="user" size="25" />
      <span className={`${className}__user-name`}>{userName}</span>
      <div onClick={onClick}>
        <Button className="btn btn-light rounded-0">Logout</Button>
      </div>
    </div>
  );
};

export default Account;
