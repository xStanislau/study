import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Overview from "./Overview/Overview";
import Secondary from "./Secondary/Secondary";
import "./Profile.scss";

const Profile = props => {
  const {
    data: { activity, overview }
  } = props;
  return (
    <Container fluid className="profile-content dashboard-right">
      <Overview {...overview} />
      <Secondary activity={activity} />
    </Container>
  );
};

const mapStateToProps = state => ({
  data: state.dashboard.data
});

export default connect(
  mapStateToProps,
  null
)(Profile);
