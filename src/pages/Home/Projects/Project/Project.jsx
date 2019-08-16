import React from "react";
import { Link } from "react-router-dom";
const Project = ({
  technology,
  title,
  numberOfDevelopers,
  description,
  className
}) => {
  return (
    <div className={`${className} d-flex justify-content-between flex-column`}>
      <div className={`${className}__technology`}>{technology}</div>
      <h4 className={`${className}__title`}>{title}</h4>
      <div className={`${className}__developers`}>{numberOfDevelopers}</div>
      <p className={`${className}__description`}>{description}</p>
      <Link to="#" className={`${className}__read-more`}>
        Read more...
      </Link>
    </div>
  );
};

export default Project;
