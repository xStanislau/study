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
    accordeon: { dashboard }
  } = mockData;
  return (
    <>
      <div className={`${classNames} sidebar-background`} />
      <div className={classNames} onClick={handleClick}>
        <Accordion>
          <div>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <SidebarItem text="dashboard" name="git-square" size />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <ul>
                {dashboard.map((element, index) => {
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
          </div>
          <div>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <SidebarItem text="charts" name="git-square" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <ul>
                {dashboard.map((element, index) => {
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
          </div>
        </Accordion>
      </div>
    </>
  );
};

export default Sidebar;
