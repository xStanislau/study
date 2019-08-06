import React, { Component } from "react";
import DashBoardHeader from "./components/DashBoardHeader/DashBoardHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardBody from "./components/DashboardBody/DashboardBody";
import { loadData } from "../../redux/modules/dashboard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
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
      this.setState({ isClosed: true });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  resizeHandler = () => {
    setTimeout(() => {
      if (window.innerWidth < 1280) {
        this.setState({ isClosed: true });
      } else {
        this.setState({ isClosed: false });
      }
    }, 50);
  };

  toogleSidebar = () => {
    this.setState(state => {
      return { isClosed: !this.state.isClosed };
    });
  };

  handleClick = evt => {
    if (this.state.isClosed) {
      this.toogleSidebar(evt);
    }
  };

  render() {
    const { isLoad, userName } = this.props;
    const DashBoard = () => {
      return (
        <div className="containter-fluid dashboard">
          <Row>
            <DashBoardHeader
              {...this.props.data}
              userName={userName}
              toogleSidebar={this.toogleSidebar}
              isClosed={this.state.isClosed}
            />
            <Sidebar
              handleClick={this.handleClick}
              isClosed={this.state.isClosed}
            />
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
  loadData: bindActionCreators(loadData, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
