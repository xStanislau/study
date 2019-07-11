import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";
import "./Main.css";
import Icon from "../../components/Icon/Icon";

class Main extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState((prevState)=> {
      return {isOpen: !prevState.isOpen}
    })
  };

  render() {
    const menuItems = ["item 1", "item 2", "item 3", "item 4"];
    const paths = ["/auth", "/auth", "/auth", "/auth"];
    return (
      <main>
        <Header className="d-flex justify-content-between align-items-center">
          <Logo>Logo</Logo>
          <Icon className="burger-icon" name="bars" size={25} onClick={this.handleClick}/>
          <Menu items={menuItems} hrefs={paths} className="header-menu"  isOpen={this.state.isOpen}/>
        </Header>
      </main>
    );
  }
}

export default Main;
