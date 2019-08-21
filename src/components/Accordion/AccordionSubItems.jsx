import React from "react";
import AccordionSubItem from "./AccordionSubItem";
import PropTypes from "prop-types";

const AccordionSubItems = props => {
  const { subItems } = props;
  return (
    <ul>
      {subItems.map((subItem, index) => {
        return (
          <li key={`${subItem.text} ${index}`}>
            <AccordionSubItem
              name="circle"
              to={subItem.link}
              color={subItem.color}
            >
              {subItem.text}
            </AccordionSubItem>
          </li>
        );
      })}
    </ul>
  );
};

AccordionSubItems.propTypes = {
  subItems: PropTypes.array
};

export default AccordionSubItems;
