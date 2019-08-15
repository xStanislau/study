import React, { Component } from "react";
import Form from "../../../components/Forms/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import Popup from "../../../components/Popup/Popup";
import Button from "../../../components/Button/Button";
import Header from "./Header/Header";
import "./Login.scss";

class Login extends Component {
  state = {
    isOpen: false
  };

  openPopup = evt => {
    evt.preventDefault();
    this.setState({ isOpen: true });
  };

  closePopup = evt => {
    evt.preventDefault();
    if (
      evt.target.className === "popup-bg" ||
      evt.currentTarget.classList.contains("close")
    ) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const LoginPage = () => {
      return (
        <main className="page-content">
          <div className="img">
            <section className="right-side">
              <Header />
              <div className="form-wrapper">
                <h2 className="text-left title h4">Login your account</h2>
                <Form />
                <div className="buttons-group d-flex justify-content-center align-items-center ">
                  <Button
                    className="btn btn-link btn-modal"
                    onClick={this.openPopup}
                  >
                    modal
                  </Button>
                  -or-
                  <Link to="/">redirect</Link>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <Button type="button" className="btn-outlined">
                    <i className="fa fa-google fa-fw" />
                    <span className="text">Sign up google</span>
                  </Button>
                </div>
                {this.state.isOpen && <Popup onClick={this.closePopup} />}
              </div>
            </section>
          </div>
        </main>
      );
    };
    return <LoginPage />;
  }
}

export default Login;
