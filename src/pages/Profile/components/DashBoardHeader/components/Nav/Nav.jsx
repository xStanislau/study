import React from "react";
import Icon from "../../../../../../components/Icon/Icon";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ text }) => {
  return (
    <nav className="header-nav col-4">
      <ul className="nav-list d-flex">
        <li className="nav-list__item">
          <Link className="nav-list__icon" to="#">
            <Icon name="bell" size="25" />
            <Badge pill variant="danger">
              5
            </Badge>
          </Link>
        </li>
        <li className="nav-list__item">
          <Link className="nav-list__icon" to="#">
            <Icon name="envelope" size="25" />
            <Badge pill variant="danger">
              12
            </Badge>
          </Link>
        </li>
        <li className="nav-list__item">
          <Link className="nav-list__icon" to="#">
            <Icon name="cog" size="25" />
            <Badge pill variant="danger">
              5
            </Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
