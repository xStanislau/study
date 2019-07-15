import React from "react";

const Project = ({ technology, title, numberOfDevelopers, description }) => {
  return (
    <>
      <section className="project-content">
        <span>{technology}</span>
        <h2>{title}</h2>
        <p>{numberOfDevelopers}</p>
        <span>{description}</span>
        <span>Read more...</span>
      </section>
    </>
  );
};

export default Project;
