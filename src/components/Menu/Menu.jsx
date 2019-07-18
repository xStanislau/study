import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ListItem from "./MenuItem/Item";
import "./Menu.scss";

// edits
// Menu -> ProjectsMenu (ListButtons)
// Link -> Buttons (Tabs)

const Menu = ({ className, hrefs, items, isOpen, itemClassName }) => {
  const classes = classNames("menu", className, { open: isOpen });
  return (
    <ul className={classes}>
      {items.map((item, index) => {
        return hrefs ? (
          <ListItem key={item}>
            <Link to={hrefs[index]}>{item}</Link>
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

// Good job!!!!!!!!
// |
// V

Menu.propTypes = {
  hrefs: PropTypes.array,
  items: PropTypes.array,
  className: PropTypes.string
};

export default Menu;
