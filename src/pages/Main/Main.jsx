import React, { Component, Fragment } from "react";
import MainHeader from "./components/Header/Header";
import Button from "../../components/Button/Button";
import Card from "./components/Card/Card";
import Project from "./components/Project/Project";
import mockData from "../../mocks/mocks";
import Menu from "../../components/Menu/Menu";
import Table from "../../components/Table/Table";
import "./Main.scss";

class Main extends Component {
  render() {
    const items = ["Trending", "Language", "Speeh", "Vision", "Data Insight"];
    const { card } = mockData;
    return (
      <Fragment>
        <MainHeader />
        <section className="main">
          <section className="promo-content">
            <div>
              <h1 className="text-center title">
                We can <span className="font-weight-bold">do</span> something
                <span className="font-weight-bold"> bigger</span>,
                <span className="font-weight-bold"> together</span>
              </h1>
              <h2 className="text-center sub-title">
                Solve problems collaboratively using IBM Watson
              </h2>
            </div>
            <div>
              <p className="text-center text-white">
                Be part of the innovation!
              </p>
              <Button className="btn btn-dark btn-outline-light rounded-0">
                Get Started
              </Button>
            </div>
          </section>
        </section>
        <section className="media-section d-flex justify-content-around ">
          <div className="media-text text-right ">
            <h3>About Cognetive Catalyst</h3>
            <p>
              Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec
              tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis
              vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae
              ultricies metus, at condimentum nulla. Donec quis ornare lacus.
              Etiam gravida mollis tortor quis porttitor.
            </p>
            <div className="text-right">
              <Button className="btn-outline-light rounded-0">
                Get Started
              </Button>
            </div>
          </div>
          <div className="media-video">
            <video className=" video" controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video>
          </div>
        </section>
        <section className="statistics d-flex justify-content-center align-items-center ">
          <ul className="statistics-list d-flex justify-content-around align-content-center flex-wrap">
            <li>
              <div className="number">13.435</div>
              <div className="description">Developers have joined</div>
            </li>
            <li>
              <div className="number">1.943</div>
              <div className="description">Software has been developed</div>
            </li>
            <li>
              <div className="number">6.346</div>
              <div className="description">Topics has been discussed</div>
            </li>
          </ul>
        </section>
        <section className="community">
          <h3 className="text-center mb-3 community-title">Comunity Value</h3>
          <div className="d-flex justify-content-around flex-wrap">
            <Card title={card.titles.contribute} text={card.texts[0]} />
            <Card title={card.titles.collaborate} text={card.texts[1]} />
            <Card title={card.titles.extend} text={card.texts[2]} />
          </div>
        </section>
        <section className="projects">
          <h1 className="projects-title text-center">Projects</h1>
          <Menu
            className="projects-menu d-flex justify-content-center align-items-start"
            items={items}
          />
          <div className="projects-grid d-flex justify-content-center flex-wrap">
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
        </section>
        <section className="forums text-center mb-5">
          <h1 className="text-center mb-4">Forums</h1>
          <Table
            cols={[
              { header: "Topics", name: "topics" },
              { header: "Category", name: "category" },
              { header: "Author", name: "author" },
              { header: "Replies", name: "replies" },
              { header: "Views", name: "views" },
              { header: "Last Post", name: "lastPost" }
            ]}
            rows={[
              {
                id: 1,
                topics:
                  "Cras quis nulla commodo, aliquam lectus sed, blandit augue.",
                category: "Improvements",
                author: "Developer 21",
                replies: "281",
                views: "8.972",
                lastPost: "Yesterday"
              },
              {
                id: 2,
                topics:
                  "Cras quis nulla commodo, aliquam lectus sed, blandit augue.",
                category: "Improvements",
                author: "Developer 21",
                replies: "281",
                views: "8.972",
                lastPost: "Yesterday"
              },
              {
                id: 3,
                topics:
                  "Cras quis nulla commodo, aliquam lectus sed, blandit augue.",
                category: "Improvements",
                author: "Developer 21",
                replies: "281",
                views: "8.972",
                lastPost: "Yesterday"
              },
              {
                id: 4,
                topics:
                  "Cras quis nulla commodo, aliquam lectus sed, blandit augue.",
                category: "Improvements",
                author: "Developer 21",
                replies: "281",
                views: "8.972",
                lastPost: "Yesterday"
              }
            ]}
          />
          <div className="text-center">
            <Button className="btn btn-light btn-outline-dark rounded-0">
              Browse Forums
            </Button>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Main;
