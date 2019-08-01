import React, { Component } from "react";
import { Form } from "react-final-form";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/input/Input";
import Icon from "../../../../components/Icon/Icon";
import { checkPassword, checkEmail } from "./../../../../utils/validation";
import { withRouter } from "react-router-dom";
import { logIn as loginAction } from "../../../../redux/modules/auth";
import "./Form.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class LoginForm extends Component {
  onSubmit = async values => {
    const response = await this.props.login(values);

    if (response) {
      return { password: response.error.message };
    }

    this.props.history.push("/profile");
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
        render={({ handleSubmit, pristine, invalid }) => {
          return (
            <form className="login-form" onSubmit={handleSubmit}>
              <Input
                className="input"
                type="email"
                name="email"
                id="user-name"
                placeholder="username@email.com"
                label="Email"
                withicon
                formGroupClass="email-group"
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
                formGroupClass="password-group"
              >
                <Icon name="lock" className="l-icon-center-left" />
              </Input>
              <Input
                className="checkbox"
                formGroupClass="checkbox-group"
                name="rememberMe"
                type="checkbox"
                id="remember-me"
                label="Remember me"
              />
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

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(loginAction, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(LoginForm));
