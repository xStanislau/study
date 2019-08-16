import React from "react";
import Project from "./Project/Project";
import Menu from "../../../components/Menu/Menu";
import mockData from "../../../mocks/mocks";
import Button from "../../../components/Button/Button";

const Projects = ({ className }) => {
  const { projects, projectsMenu } = mockData;
  return (
    <section className={`${className} pt-50 pb-60`}>
      <div className="wrapper">
        <h3 className={`${className}-title h2 text-center`}>Projects</h3>
        <Menu
          className={`${className}__menu d-flex align-items-start`}
          items={projectsMenu}
        />
        <div className={`${className}__wrapper`}>
          <div className={`${className}__container row `}>
            {projects.map((project, index) => {
              return (
                <div
                  key={`${project.technology} ${project.title} ${index}`}
                  className={`${className}__project col-xs-12 col-sm-12 col-md-6 col-xl-4`}
                >
                  <Project
                    key={`${project.technology} ${project.title} ${index}`}
                    className="project"
                    technology={project.technology}
                    title={project.title}
                    numberOfDevelopers={project.numberOfDevelopers}
                    description={project.description}
                  />
                </div>
              );
            })}
          </div>
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
