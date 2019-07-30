import React from "react";
import "./Loader.scss";
import { Spinner } from "react-bootstrap";

const Loader = Component => props => {
  if (!props.isLoad) {
    return (
      <div className="loader">
        <div className="loader-body">
          <Spinner animation="border" />
        </div>
      </div>
    );
  }

  return <Component {...props} />;
};

export default Loader;
