import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import "./Sidebar.scss";

const Sidebar = ({ isClosed, openSidebar, children }) => {
  const classNames = cx("sidebar", "dashboard-left", "mobile", {
    isClosed
  });

  return (
    <>
      <div className={classNames} onClick={openSidebar}>
        {children}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isClosed: state.sidebar.isClosed
});

export default connect(
  mapStateToProps,
  null
)(Sidebar);
