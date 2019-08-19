import React from "react";
import Icon from "../../../../components/Icon/Icon";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ notifications, emails, settings }) => {
  return (
    <nav className="header-nav">
      <ul className="nav-list d-flex">
        <li className="nav-list__item">
          <Link className="nav-list__icon" to="#">
            <Icon name="bell" size="25" />
            <Badge pill variant="danger">
              {notifications}
            </Badge>
          </Link>
        </li>
        <li className="nav-list__item">
          <Link className="nav-list__icon" to="#">
            <Icon name="envelope" size="25" />
            <Badge pill variant="danger">
              {emails}
            </Badge>
          </Link>
        </li>
        <li className="nav-list__item">
          <Link className="nav-list__icon" to="#">
            <Icon name="cog" size="25" />
            {settings && (
              <Badge pill variant="danger">
                {settings}
              </Badge>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
