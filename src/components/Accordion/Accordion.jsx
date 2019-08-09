import React from "react";
import { Accordion as BootstrapAccordion, Card } from "react-bootstrap";
import AccordionItem from "./AccordionItem";
import AccordionSubItem from "./AccordionSubItem";

const Accordion = props => {
  const { items } = props;
  return (
    <BootstrapAccordion>
      {items.map((item, index) => {
        const { subItems, text, iconName } = item;
        return (
          <Card key={text}>
            <BootstrapAccordion.Toggle as={Card.Header} eventKey={index}>
              <AccordionItem text={text} name={iconName} size />
            </BootstrapAccordion.Toggle>
            <BootstrapAccordion.Collapse eventKey={index}>
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
            </BootstrapAccordion.Collapse>
          </Card>
        );
      })}
    </BootstrapAccordion>
  );
};

export default Accordion;
