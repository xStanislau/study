import React, { Fragment, Component } from "react";
import Form from "./Form/Form";
import { Link } from "react-router-dom";
import "./Login.scss";
import Popup from "../../../components/Popup/Popup";
import Button from "../../../components/Button/Button";

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
      evt.currentTarget.className === "close"
    ) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    return (
      <Fragment>
        <main className="page-content">
          <div className="img">
            <section className="right-side">
              <div className="form-wrapper">
                <h2 className="text-center">Log in</h2>
                <Form />
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <Button onClick={this.openPopup}>modal</Button>
                  -or-
                  <Button>
                    <Link to="/main-page">redirect</Link>
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
      </Fragment>
    );
  }
}

export default Login;
