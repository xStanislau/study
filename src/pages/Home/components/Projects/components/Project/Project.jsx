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
    <div className={className}>
      <div className="project-technology">{technology}</div>
      <h4 className="project-title">{title}</h4>
      <div className="project-developers">{numberOfDevelopers}</div>
      <p className="project-description">{description}</p>
      <Link to="#" className="project-read-more">
        Read more...
      </Link>
    </div>
  );
};

export default Project;
