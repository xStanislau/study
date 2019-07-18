import React, { Component } from "react";
import MainHeader from "./components/Header/Header";
import News from "./components/News/News";
import StartGuide from "./components/StartGuide/StartGuide";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Community from "./components/Community/Community";
import Statistics from "./components/Statistics/Statistics";
import Media from "./components/Media/Media";
import Promo from "./components/Promo/Promo";
import Forums from "./components/Forums/Forums";

import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <MainHeader className="main-header d-flex justify-content-center" />
        <Promo className="promo" />
        <Media className="media" />
        <Statistics className="statistics" />
        <Community className="community" />
        <Projects className="projects" />
        <Forums className="forums" />
        <News className="news" />
        <StartGuide className="start-guide" />
        <Footer className="footer" />
      </>
    );
  }
}

export default Main;
