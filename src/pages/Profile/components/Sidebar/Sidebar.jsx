import React from "react";
import "./Sidebar.scss";
import { Accordion, Card } from "react-bootstrap";
import SidebarItem from "./components/Item/Item";
import SubItem from "./components/Subitem/Subitem";
import mockData from "../../../../mocks/mocks";
import cx from "classnames";
import { connect } from "react-redux";
import { openSidebar } from "../../../../redux/modules/sidebar";
import { bindActionCreators } from "../../../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";

const Sidebar = ({ isClosed, openSidebar }) => {
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
      <div className={classNames} onClick={openSidebar}>
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

const mapStateToProps = state => ({
  isClosed: state.sidebar.isClosed
});

const mapDispatchToProps = dispatch => ({
  openSidebar: bindActionCreators(openSidebar, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
