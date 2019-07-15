import React, { Component, Fragment } from "react";
import MainHeader from "./components/Header/Header";
import Button from "../../components/Button/Button";
import Card from "./components/Card/Card";
import Project from "./components/Project/Project";
import mockData from "../../mocks/mocks";
import Menu from "../../components/Menu/Menu";
import "./Main.scss";

class Main extends Component {
  render() {
    const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];
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
              <Button className="btn btn-dark btn-outline-light">
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
              <Button className="btn-outline-light ">Get Started</Button>
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
        <section className="community ">
          <h3 className="text-center mb-5">Comunity Value</h3>
          <div className="d-flex justify-content-around flex-wrap">
            <Card title={card.titles.contribute} text={card.texts[0]} />
            <Card title={card.titles.collaborate} text={card.texts[1]} />
            <Card title={card.titles.extend} text={card.texts[2]} />
          </div>
        </section>
        {/* <section>
          <h1>Project</h1>
          <Menu className="project-menu mx-auto" items={items} />
          {mockData.projects.map(project => {
            return (
              <Project
                technology={project.technology}
                title={project.title}
                numberOfDevelopers={project.numberOfDevelopers}
                description={project.description}
              />
            );
          })}
        </section> */}
      </Fragment>
    );
  }
}

export default Main;
