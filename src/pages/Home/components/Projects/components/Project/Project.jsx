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
      <span className="project-technology">{technology}</span>
      <h4 className="project-title">{title}</h4>
      <span className="project-developers">{numberOfDevelopers}</span>
      <span className="project-description">{description}</span>
      <Link to="#" className="project-read-more">
        Read more...
      </Link>
    </div>
  );
};

export default Project;
