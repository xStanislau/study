import React from "react";
import { connect } from "react-redux";
import Overview from "./Overview/Overview";
import Secondary from "./Secondary/Secondary";
import "./Profile.scss";

const Profile = props => {
  const {
    data: { activity, overview }
  } = props;
  return (
    <>
      <Overview {...overview} />
      <Secondary activity={activity} />
    </>
  );
};

const mapStateToProps = state => ({
  data: state.dashboard.data
});

export default connect(
  mapStateToProps,
  null
)(Profile);
