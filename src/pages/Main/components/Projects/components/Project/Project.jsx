import React from "react";

const Project = ({
  technology,
  title,
  numberOfDevelopers,
  description,
  className
}) => {
  // edits
  // add different content
  return (
    <div className={className}>
      <span className="project-technology">{technology}</span>
      <h3 className="project-title">{title}</h3>
      <span className="project-developers">{numberOfDevelopers}</span>
      <span className="project-description">{description}</span>
      <span className="project-read-more">Read more...</span>
    </div>
  );
};

export default Project;
