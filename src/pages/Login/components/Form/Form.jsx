import React, { Component } from "react";
import { Form } from "react-final-form";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/input/Input";
import Icon from "../../../../components/Icon/Icon";
import { checkPassword, checkEmail } from "./../../../../utils/validation";
import { withRouter } from "react-router-dom";
import "./Form.scss";

class LoginForm extends Component {
  onSubmit = () => {
    this.props.history.push("/main-page");
  };

  validate = values => {
    const errors = {};
    if (!checkPassword(values.password)) {
      errors.password = "Password must consist of numbers and leters";
    }
    if (!checkEmail(values.email)) {
      errors.email = "Please enter correct email";
    }
    return errors;
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <Input
              className="input"
              type="email"
              name="email"
              id="user-email"
              placeholder="email@eample.com"
              label="Email"
              withicon
            >
              <Icon name="envelope" className="l-icon-center-left" />
            </Input>
            <Input
              className="input"
              type="password"
              name="password"
              id="user-password"
              placeholder="password"
              label="Password"
              withicon
            >
              <Icon name="lock" className="l-icon-center-left" />
            </Input>
            <Button
              type="submit"
              className="btn btn-primary"
              disabled={pristine || invalid}
            >
              Login
            </Button>
          </form>
        )}
      />
    );
  }
}

export default withRouter(LoginForm);
