import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";
import "./Main.css";

class Main extends Component {
  render() {
    const menuItems = ["item 1", "item 2", "item 3", "item 4"];
    const paths = ["/auth", "/auth", "/auth", "/auth"]
    return (
      <main>
        <Header className="navbar navbar-ligh d-flex justify-content-between align-items-center">
          <Logo>Logo</Logo>
          <Menu items={menuItems} hrefs={paths} className="d-flex" />
        </Header>
      </main>
    );
  }
}

export default Main;
