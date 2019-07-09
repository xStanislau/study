import React, {Fragment, Component} from 'react';
import {Link} from "react-router-dom";
import './Menu.css'

const Menu = (props) => {
  return (
      <Fragment>
        <ul className="menu d-flex">
          <li className="menu-item">
            <Link to="/auth">Login page</Link>
          </li>
          <li className="menu-item">
            <Link to="/auth">Login page</Link>
          </li>
          <li className="menu-item">
            <Link to="/auth">Login page</Link>
          </li>
        </ul>
      </Fragment>
  )
};

export default Menu;