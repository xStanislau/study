import connect from "react-redux";
import AuthRoute from "./AuthRoute";

const mapStateToProps = state => {
  return {
    isAuthorized: state.user.isAuthorized
  };
};

export default connect(mapStateToProps)(AuthRoute);
