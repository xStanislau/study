import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cx from "classnames";
import Searchbar from "./components/Searchbar/Searchbar";
import Nav from "./components/Nav/Nav";
import Account from "./components/Account/Account";
import Icon from "../../../../components/Icon/Icon";
import "./DashBoardHeader.scss";

class DashBoardHeader extends Component {
  render() {
    const classNames = cx("dashboard-left", {
      isClosed: this.props.isClosed
    });
    const { notifications, emails, toogleSidebar } = this.props;
    return (
      <Container className="top-container" fluid>
        <Row className="top-row flex-nowrap  white-05">
          <Col className={classNames}>
            <header className="sidebar-header d-flex align-items-center">
              <div className="sidebar-header__content d-flex justify-content-between">
                <h6 className="sidebar-header__title">Profile</h6>
                <Icon name="align-left" size="25" onClick={toogleSidebar} />
              </div>
            </header>
          </Col>
          <Col className="dashboard-right">
            <header className="dashboard-header">
              <Nav notifications={notifications} emails={emails} />

              <div className="d-flex justify-content-end align-items-center">
                {/* <Searchbar /> */}
                <Account />
              </div>
            </header>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashBoardHeader;
