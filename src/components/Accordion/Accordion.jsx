import React from "react";
import { Accordion as BootstrapAccordion, Card } from "react-bootstrap";
import AccordionItem from "./AccordionItem";
import AccordionSubItems from "./AccordionSubItems";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleAccordionItem } from "../../redux/reducers/accordion";

import "./Accordion.scss";
import { bindActionCreators } from "../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";

const Accordion = props => {
  const { items, itemIsClosed, toggleAccordionItem } = props;

  const onItemCLick = evt => {
    const itemsLists = document.querySelectorAll(".accordion__toggle");
    if (!itemIsClosed) {
      evt.currentTarget.classList.add("active");
    }

    [...itemsLists].forEach(item => {
      if (item.classList.contains("active") && itemIsClosed) {
        item.classList.remove("active");
      }
    });

    toggleAccordionItem();
  };

  return (
    <BootstrapAccordion>
      {items.map((item, index) => {
        const { subItems, text, iconName } = item;
        return (
          <div key={text} className="accordion__item-container">
            <BootstrapAccordion.Toggle
              as={Card.Header}
              onClick={onItemCLick}
              className="accordion__toggle"
              eventKey={index}
            >
              <AccordionItem text={text} name={iconName} size />
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
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleAccordionItem }, dispatch);
};
export default connect(
  mapStatToProps,
  mapDispatchToProps
)(Accordion);
