import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut as logOutAction } from "../../redux/modules/auth";
import { withRouter } from "react-router-dom";

class LogOut extends Component {
  componentDidMount = async () => {
    await this.props.logOut("user");
    this.props.history.push("/");
  };

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logOutAction, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(LogOut));
