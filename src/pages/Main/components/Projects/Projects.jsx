import React from "react";
import Project from "./components/Project/Project";
import Menu from "../../../../components/Menu/Menu";
import mockData from "../../../../mocks/mocks";
import Button from "../../../../components/Button/Button";

const Projects = ({ className }) => {
  const items = ["Trending", "Language", "Speeh", "Vision", "Data Insight"];
  return (
    <section className={`${className}`}>
      <div className="wrapper">
        <h2 className={`${className}-title text-center`}>Projects</h2>
        <Menu
          className={`${className}-menu d-flex align-items-start`}
          items={items}
        />
        <div
          className={`${className}-grid d-flex justify-content-center flex-wrap`}
        >
          {mockData.projects.map((project, index) => {
            return (
              <Project
                key={`${project.technology} ${project.title} ${index}`}
                className="project d-flex flex-column justify-content-around"
                technology={project.technology}
                title={project.title}
                numberOfDevelopers={project.numberOfDevelopers}
                description={project.description}
              />
            );
          })}
        </div>
        <div className="text-center">
          <Button className="btn btn-dark btn-outline-light rounded-0">
            Browse All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
