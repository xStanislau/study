import React, { Component, Fragment } from "react";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";
import SideMenu from "./../../components/Sidemenu/SideMenu";
import "./Main.scss";
import Icon from "../../components/Icon/Icon";

class Main extends Component {
  state = {
    isOpen: false,
    isSideMenuOpen: false
  };

  toggleTopMenu = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  toggleSideMenu = () => {
    this.setState(prevState => ({ isSideMenuOpen: !prevState.isSideMenuOpen }));
  };

  render() {
    const menuItems = ["item 1", "item 2", "item 3", "item 4"];
    const paths = ["/auth", "/auth", "/auth", "/auth"];
    return (
      <Fragment>
        <Header className="d-flex justify-content-between align-items-center">
          <Logo className="logo" onClick={this.toggleSideMenu}>
            Logo
          </Logo>
          <Icon
            className="burger-icon"
            name="bars"
            size={25}
            onClick={this.toggleTopMenu}
          />
          <Menu
            items={menuItems}
            hrefs={paths}
            className="header-menu"
            isOpen={this.state.isOpen}
          />
        </Header>
        <SideMenu isOpen={this.state.isSideMenuOpen}>
          <Menu
            items={menuItems}
            hrefs={paths}
            className="d-flex flex-column"
            itemClassName="side-menu-item"
          />
        </SideMenu>
        <main>Content</main>
      </Fragment>
    );
  }
}

export default Main;
