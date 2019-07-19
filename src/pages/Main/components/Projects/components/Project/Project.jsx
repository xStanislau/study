import React from "react";

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
      <h3 className="project-title">{title}</h3>
      <span className="project-developers">{numberOfDevelopers}</span>
      <span className="project-description">{description}</span>
      <a href="#" className="project-read-more">Read more...</a>
    </div>
  );
};

export default Project;
