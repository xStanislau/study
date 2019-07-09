import React, {Component} from 'react';
import Header from '../../components/Header/Header'
import Logo from '../../components/Logo/Logo'
import Menu from "../../components/Menu/Menu";

class Main extends Component {
    render() {
        return (
            <Header className="d-flex justify-content-between align-items-center">
                <Logo>Logo</Logo>
                <Menu />
            </Header>
        )
    }
}

export default Main;