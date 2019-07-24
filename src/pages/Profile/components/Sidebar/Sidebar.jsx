import React, { Component } from "react";
import "./Sidebar.scss";
import { Accordion, Card } from "react-bootstrap";
import SidebarItem from "./components/Item/Item";
import Icon from "../../../../components/Icon/Icon";
import SubItem from "./components/Subitem/Subitem";
import mockData from "../../../../mocks/mocks";
import cx from "classnames";

class Sidebar extends Component {
  state = {
    isClosed: false
  };

  toogleSidebar = () => {
    this.setState(state => {
      return { isClosed: !this.state.isClosed };
    });
  };

  render() {
    const classNames = cx("sidebar", "col-3", {
      isClosed: this.state.isClosed
    });
    const {
      accordeon: { dashboard }
    } = mockData;
    return (
      <div className={classNames}>
        <div className="container">
          <header className="sidebar-header d-flex align-items-center">
            <div className="sidebar-header__content d-flex justify-content-between">
              <h6 className="sidebar-header__title">Profile</h6>
              <Icon name="align-left" size="25" onClick={this.toogleSidebar} />
            </div>
          </header>
          <Accordion>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <SidebarItem text="Dashboard" name="git-square" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <ul>
                {dashboard.map((element, index) => {
                  return (
                    <li key={`${element} ${index}`}>
                      <SubItem name="circle" to={element.link}>
                        {element.text}
                      </SubItem>
                    </li>
                  );
                })}
              </ul>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <SidebarItem text="Charts" name="git-square" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <ul>
                {dashboard.map((element, index) => {
                  return (
                    <li key={`${element} ${index}`}>
                      <SubItem name="circle" to={element.link}>
                        {element.text}
                      </SubItem>
                    </li>
                  );
                })}
              </ul>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default Sidebar;
