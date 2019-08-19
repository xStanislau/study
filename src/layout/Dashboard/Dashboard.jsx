import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DashBoardHeader from "./DashBoardHeader/DashBoardHeader";
import Sidebar from "./Sidebar/Sidebar";
import { fetch } from "../../redux/reducers/dashboard";
import { openSidebar, closeSidebar } from "../../redux/reducers/sidebar";
import Loader from "../../components/Loader/Loader";
import Accordion from "../../components/Accordion/Accordion";
import mockData from "../../mocks/mocks";
import "./Dashboard.scss";

class Dashboard extends Component {
  componentDidMount() {
    const { userId } = mockData.dashboardData.data;
    // userId ???
    this.props.fetch(userId);
    window.addEventListener("resize", this.resizeHandler);

    if (window.innerWidth < 1280) {
      this.props.closeSidebar();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  onCloseSidebar = isClosed => {
    const { closeSidebar } = this.props;
    if (!isClosed) {
      const accordionItems = document.querySelectorAll(".collapse");
      [...accordionItems].forEach(item => {
        if (item.classList.contains("show")) {
          item.previousSibling.click();
        }
      });

      closeSidebar();
    }
  };

  resizeHandler = () => {
    const { onCloseSidebar } = this;
    const { openSidebar } = this.props;
    setTimeout(() => {
      if (window.innerWidth < 1280) {
        onCloseSidebar();
      } else {
        openSidebar();
      }
    }, 50);
  };

  render() {
    const { isLoad, userName, data, openSidebar, children } = this.props;
    const { onCloseSidebar } = this;
    const {
      dashboardData: {
        sidebar: { items }
      }
    } = mockData;

    return (
      <>
        {!isLoad && <Loader />}
        <div className="containter-fluid dashboard">
          <Row className="h-100">
            <DashBoardHeader
              {...data}
              userName={userName}
              onCloseSidebar={onCloseSidebar}
            />
            <Sidebar openSidebar={openSidebar}>
              <Accordion items={items} />
            </Sidebar>
            {isLoad && (
              <Col className="right-col white-smoke-bg">
                <Container fluid className="dashboard__content dashboard-right">
                  {children}
                </Container>
              </Col>
            )}
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.dashboard.data,
  isLoad: state.dashboard.isLoaded,
  userName: state.auth.userInfo.userName,
  isClosed: state.sidebar.isClosed
});

const mapDispatchToProps = dispatch => ({
  fetch: bindActionCreators(fetch, dispatch),
  openSidebar: bindActionCreators(openSidebar, dispatch),
  closeSidebar: bindActionCreators(closeSidebar, dispatch)
});

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetch, openSidebar, closeSidebar }, dispatch)
// }
// https://react-redux.js.org/using-react-redux/connect-mapdispatch

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // { fetch, openSidebar, closeSidebar }
)(Dashboard);
