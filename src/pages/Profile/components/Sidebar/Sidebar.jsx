import React from "react";
import "./Sidebar.scss";
import { Accordion, Card } from "react-bootstrap";
import SidebarItem from "./components/Item/Item";
import SubItem from "./components/Subitem/Subitem";
import mockData from "../../../../mocks/mocks";
import cx from "classnames";

const Sidebar = ({ handleClick, isClosed }) => {
  const classNames = cx("sidebar", "dashboard-left", "mobile", {
    isClosed
  });

  const {
    dashboardData: {
      sidebar: { items }
    }
  } = mockData;

  return (
    <>
      <div className={classNames} onClick={handleClick}>
        <Accordion>
          {items.map((item, index) => {
            const { subItems, text, iconName } = item;
            return (
              <Card key={text}>
                <Accordion.Toggle as={Card.Header} eventKey={index}>
                  <SidebarItem text={text} name={iconName} size />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                  <ul>
                    {subItems.map((element, index) => {
                      return (
                        <li key={`${element.text} ${index}`}>
                          <SubItem name="circle" to={element.link}>
                            {element.text}
                          </SubItem>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default Sidebar;
