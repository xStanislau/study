import React, { Component } from "react";
import { Form } from "react-final-form";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/input/Input";
import Icon from "../../../../components/Icon/Icon";
import { checkPassword } from "./../../../../utils/validation";
import { withRouter } from "react-router-dom";
import logIn from "../../../../redux/actions/login";
import mockData from "../../../../mocks/mocks";
import "./Form.scss";

const { credentials } = mockData;

class LoginForm extends Component {
  onSubmit = values => {
    if (
      values.username !== credentials.userName ||
      values.password !== credentials.password
    ) {
      return { password: "The username or password you entered is incorrect" };
    } else {
      this.props.history.push("/profile");
    }
  };

  validate = values => {
    const errors = {};
    if (!checkPassword(values.password)) {
      errors.password = "Password must consist of numbers and leters";
    }

    return errors;
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({ handleSubmit, pristine, invalid }) => {
          return (
            <form className="login-form" onSubmit={handleSubmit}>
              <Input
                className="input"
                type="text"
                name="username"
                id="user-name"
                placeholder="username"
                label="Username"
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
          );
        }}
      />
    );
  }
}

export default withRouter(LoginForm);
