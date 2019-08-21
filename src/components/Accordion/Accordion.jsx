import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Accordion as BootstrapAccordion, Card } from "react-bootstrap";
import AccordionItem from "./AccordionItem";
import AccordionSubItems from "./AccordionSubItems";
import "./Accordion.scss";

const Accordion = props => {
  const { items } = props;

  return (
    <BootstrapAccordion>
      {items.map((item, index) => {
        const { subItems, text, iconName, link } = item;

        return (
          <div key={text} className="accordion__item-container">
            <BootstrapAccordion.Toggle
              as={Card.Header}
              className="accordion__toggle"
              eventKey={index}
            >
              <NavLink
                to={`/profile${link}`}
                activeClassName="active"
                className="accordion__link"
              >
                <AccordionItem text={text} name={iconName} size />
              </NavLink>
            </BootstrapAccordion.Toggle>
            <BootstrapAccordion.Collapse
              className="accordion__collapse"
              eventKey={index}
            >
              <AccordionSubItems subItems={subItems} />
            </BootstrapAccordion.Collapse>
          </div>
        );
      })}
    </BootstrapAccordion>
  );
};

const mapStatToProps = state => {
  return { itemIsClosed: state.accordion.itemIsClosed };
};

export default connect(
  mapStatToProps,
  null
)(Accordion);
