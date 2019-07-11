import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Item from "./MenuItem/Item";
import "./Menu.css";

const Menu = ({ className, hrefs, items, isOpen, itemClassName }) => {
  const classes = classNames("menu", className, { open: isOpen });
  return (
    <ul className={classes}>
      {items.map((item, index) => {
        return (
          <Item className={itemClassName} key={item}>
            {hrefs ? <Link to={hrefs[index]}>{item}</Link> : item}
          </Item>
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
