import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import Nav from "./Nav/Nav";
import Account from "./Account/Account";
import Icon from "../../../components/Icon/Icon";
import "./DashBoardHeader.scss";
import {
  openSidebar,
  closeSidebar,
  toggleSidebar
} from "../../../redux/reducers/sidebar";
import { withRouter } from "react-router-dom";

import { logOut } from "../../../redux/reducers/auth";

class DashBoardHeader extends Component {
  onToggleSidebar = () => {
    const { onCloseSidebar, isClosed, toggleSidebar } = this.props;
    if (!isClosed) {
      onCloseSidebar(isClosed);
    } else {
      toggleSidebar();
    }
  };

  handleLogOut = async () => {
    const { logOut, history } = this.props;
    await logOut("user");
    history.push("/login");
  };

  render() {
    const classNames = cx("dashboard-left", {
      isClosed: this.props.isClosed
    });

    const { notifications, emails, userName } = this.props;
    const { onToggleSidebar } = this;
    return (
      <Container className="top-container" fluid>
        <Row className="top-row flex-nowrap  white-05">
          <Col className={classNames}>
            <header className="sidebar-header d-flex align-items-center">
              <div className="sidebar-header__content d-flex justify-content-between">
                <h6 className="sidebar-header__title h6">
                  <NavLink
                    className="sidebar-header__link"
                    activeClassName="sidebar-header__link_active"
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </h6>

                <Icon
                  className="sidebar-header__icon"
                  name="align-left"
                  size="25"
                  onClick={onToggleSidebar}
                />
              </div>
            </header>
          </Col>
          <Col className="dashboard-right">
            <header className="dashboard-header">
              <Nav notifications={notifications} emails={emails} />
              <div className="d-flex justify-content-end align-items-center">
                <Account userName={userName} onClick={this.handleLogOut} />
              </div>
            </header>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isClosed: state.sidebar.isClosed,
  isAuthorized: state.auth.isAuthorized
});

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(

//     dispatch
//   );
// };

export default connect(
  mapStateToProps,
  { openSidebar, closeSidebar, toggleSidebar, logOut }
)(withRouter(DashBoardHeader));
