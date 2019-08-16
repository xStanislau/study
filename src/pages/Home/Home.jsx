import React, { Component } from "react";
import MainHeader from "./Header/Header";
import News from "./News/News";
import StartGuide from "./StartGuide/StartGuide";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";
import Community from "./Community/Community";
import Statistics from "./Statistics/Statistics";
import Media from "./Media/Media";
import Promo from "./Promo/Promo";
import Forums from "./Forums/Forums";

import "./Home.scss";

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
