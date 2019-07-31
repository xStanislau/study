import React, { Component } from "react";
import DashBoardHeader from "./components/DashBoardHeader/DashBoardHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import "./Profile.scss";
import DashboardBody from "./components/DashboardBody/DashboardBody";
import { loadData } from "../../redux/modules/dashboard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

class Profile extends Component {
  state = {
    isClosed: false
  };
  resizeHandler = () => {
    setTimeout(() => {
      if (window.innerWidth < 1024) {
        this.setState({ isClosed: true });
      } else {
        this.setState({ isClosed: false });
      }
    }, 50);
  };
  componentDidMount() {
    this.props.loadData(1);
    window.addEventListener("resize", this.resizeHandler);
  }
  componentWillUnmount() {
    window.removeEventListener(this.resizeHandler);
  }

  toogleSidebar = evt => {
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
    const { isLoad } = this.props;
    return (
      <div className="containter-fluid dashboard">
        <Row>
          <DashBoardHeader
            {...this.props.data}
            toogleSidebar={this.toogleSidebar}
            isClosed={this.state.isClosed}
          />
          <Sidebar
            handleClick={this.handleClick}
            isClosed={this.state.isClosed}
          />
          {isLoad && (
            <Col className="right-col">
              <DashboardBody {...this.props.data} />
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.dashboard.data,
  isLoad: state.dashboard.isLoaded
});

const mapDispatchToProps = dispatch => ({
  loadData: bindActionCreators(loadData, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
