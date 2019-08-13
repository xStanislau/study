import React from "react";
import AccordionSubItem from "./AccordionSubItem";

const AccordionSubItems = props => {
  const { subItems } = props;
  return (
    <ul>
      {subItems.map((subItem, index) => {
        return (
          <li key={`${subItem.text} ${index}`}>
            <AccordionSubItem name="circle" to={subItem.link}>
              {subItem.text}
            </AccordionSubItem>
          </li>
        );
      })}
    </ul>
  );
};

export default AccordionSubItems;
