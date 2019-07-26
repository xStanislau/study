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
  componentDidMount() {
    this.props.loadData(1);
  }

  render() {
    debugger;
    const { isLoad } = this.props;
    return (
      <div className="containter-fluid dashboard">
        <Row>
          <Sidebar />
          {isLoad && (
            <Col className="right-col">
              <DashBoardHeader {...this.props.data} />
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
