import React, { Component } from "react";
import Form from "./Form/Form";
import { Link } from "react-router-dom";
import "./Login.scss";
import Popup from "../../../components/Popup/Popup";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";

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
              <header className=" header d-flex justify-content-between">
                <a href="/home" className="link link-left">
                  Home
                </a>
                <div className="left-links">
                  <a href="/home" className="link">
                    Contacts /
                  </a>
                  <a href="/home" className="link">
                    Privacy
                  </a>
                </div>
              </header>
              <div className="form-wrapper">
                <h2 className="text-center title">Login your account</h2>
                <Form />
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <Button onClick={this.openPopup}>modal</Button>
                  -or-
                  <Button>
                    <Link to="/">redirect</Link>
                  </Button>
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
