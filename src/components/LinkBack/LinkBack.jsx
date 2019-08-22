import React from "react";
import { Link } from "react-router-dom";

const LinkBack = ({ prevPath, children }) => {
  if (prevPath) {
    return (
      <Link to={prevPath} className="btn-link d-block mt-5">
        {children || "<< Back"}
      </Link>
    );
  } else {
    return null;
  }
};

LinkBack.defaultProps = {
  prevPath: ""
};

export default LinkBack;
