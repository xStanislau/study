import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DashBoardHeader from "./components/DashBoardHeader/DashBoardHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardBody from "./components/DashboardBody/DashboardBody";
import { loadData } from "../../redux/modules/dashboard";
import { openSidebar, closeSidebar } from "../../redux/modules/sidebar";
import Loader from "../../components/Loader/Loader";
import "./Profile.scss";

class Profile extends Component {
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

  handleClick = () => isClosed => {
    if (isClosed) {
      this.props.toogleSidebar();
    }
  };

  render() {
    const { isLoad, userName } = this.props;
    const DashBoard = () => {
      return (
        <div className="containter-fluid dashboard">
          <Row>
            <DashBoardHeader {...this.props.data} userName={userName} />
            <Sidebar openSidebar={this.props.openSidebar} />
            <Col className="right-col">
              <DashboardBody isLoad={isLoad} {...this.props.data} />
            </Col>
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
)(Profile);
