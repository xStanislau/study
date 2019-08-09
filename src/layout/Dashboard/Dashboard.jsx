import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DashBoardHeader from "./DashBoardHeader/DashBoardHeader";
import Sidebar from "./Sidebar/Sidebar";
import { loadData } from "../../redux/reducers/dashboard";
import { openSidebar, closeSidebar } from "../../redux/reducers/sidebar";
import Loader from "../../components/Loader/Loader";
import Accordion from "../../components/Accordion/Accordion";
import mockData from "../../mocks/mocks";
import "./Dashboard.scss";

class Dashboard extends Component {
  state = {
    isClosed: false
  };

  componentDidMount() {
    this.props.loadData(1);
    window.addEventListener("resize", this.resizeHandler);
    if (window.innerWidth < 1280) {
      this.props.closeSidebar();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  resizeHandler = () => {
    setTimeout(() => {
      if (window.innerWidth < 1280) {
        this.props.closeSidebar();
      } else {
        this.props.openSidebar();
      }
    }, 50);
  };

  render() {
    const { isLoad, userName, data, openSidebar, children } = this.props;
    const {
      dashboardData: {
        sidebar: { items }
      }
    } = mockData;
    const DashBoard = () => {
      return (
        <div className="containter-fluid dashboard">
          <Row className="h-100">
            <DashBoardHeader {...data} userName={userName} />
            <Sidebar openSidebar={openSidebar}>
              <Accordion items={items} />
            </Sidebar>
            {isLoad && (
              <Col className="right-col dashboard-right">
                <Container fluid className="profile-content dashboard-right">
                  {children}
                </Container>
              </Col>
            )}
          </Row>
        </div>
      );
    };

    const DashBoardWithLoader = Loader(DashBoard);
    return <DashBoardWithLoader isLoad={isLoad} />;
  }
}

const mapStateToProps = state => ({
  data: state.dashboard.data,
  isLoad: state.dashboard.isLoaded,
  userName: state.auth.userInfo.userName
});

const mapDispatchToProps = dispatch => ({
  loadData: bindActionCreators(loadData, dispatch),
  openSidebar: bindActionCreators(openSidebar, dispatch),
  closeSidebar: bindActionCreators(closeSidebar, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
