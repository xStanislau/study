import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ListItem from "./MenuItem/Item";
import "./Menu.scss";

const Menu = ({ className, hrefs, items, isOpen, itemClassName }) => {
  const classes = classNames("menu", className, { open: isOpen });
  return (
    <ul className={classes}>
      {items.map((item, index) => {
        return hrefs ? (
          <ListItem key={item}>
            <NavLink
              className="link"
              activeClassName="isActive"
              to={hrefs[index]}
            >
              {item}
            </NavLink>
          </ListItem>
        ) : (
          <ListItem className={itemClassName} key={item}>
            {item}
          </ListItem>
        );
      })}
    </ul>
  );
};

Menu.propTypes = {
  hrefs: PropTypes.array,
  items: PropTypes.array,
  className: PropTypes.string
};

export default Menu;
