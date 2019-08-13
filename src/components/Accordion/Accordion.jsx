import React from "react";
import { Accordion as BootstrapAccordion, Card } from "react-bootstrap";
import AccordionItem from "./AccordionItem";
import AccordionSubItems from "./AccordionSubItems";
import "./Accordion.scss";

const Accordion = props => {
  const { items } = props;
  return (
    <BootstrapAccordion>
      {items.map((item, index) => {
        const { subItems, text, iconName } = item;
        return (
          <Card key={text} className="accordion__item-container">
            <BootstrapAccordion.Toggle
              as={Card.Header}
              className="accordion__toggle"
              eventKey={index}
            >
              <AccordionItem text={text} name={iconName} size />
            </BootstrapAccordion.Toggle>
            <BootstrapAccordion.Collapse eventKey={index}>
              <AccordionSubItems subItems={subItems} />
            </BootstrapAccordion.Collapse>
          </Card>
        );
      })}
    </BootstrapAccordion>
  );
};

export default Accordion;
