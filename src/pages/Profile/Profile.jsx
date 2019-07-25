import React, { Component } from "react";
import DashBoardHeader from "./components/DashBoardHeader/DashBoardHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import "./Profile.scss";
import DashboardBody from "./components/DashboardBody/DashboardBody";
import { loadData } from "../../redux/modules/dashboard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class Profile extends Component {
  componentDidMount() {
    this.props.loadData(1);
  }
  render() {
    return (
      <div className="containter-fluid dashboard">
        <div className="row">
          <Sidebar />
          <div className="col right-col">
            <DashBoardHeader />
            {/* <main className="dashboard-content">some content</main> */}
            <DashboardBody />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  isLoad: state.isLoaded
});

const mapDispatchToProps = dispatch => ({
  loadData: bindActionCreators(loadData, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
