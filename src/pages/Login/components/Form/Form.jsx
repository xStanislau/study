import React, { Component } from "react";
import { Form } from "react-final-form";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/input/Input";
import Icon from "../../../../components/Icon/Icon";
import { checkPassword, checkEmail } from "./../../../../utils/validation";
import { withRouter } from "react-router-dom";
import { logIn as loginAction } from "../../../../redux/modules/auth";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./Form.scss";

class LoginForm extends Component {
  onSubmit = async values => {
    const response = await this.props.login(values);

    if (response) {
      return { email: response.error.message };
    }
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
    debugger;
    const { isAuthorized } = this.props;
    if (isAuthorized) {
      this.props.history.push("/profile");
    }
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        initialValues={this.props.values && this.props.values}
        render={({
          handleSubmit,
          dirtySinceLastSubmit,
          hasValidationErrors,
          dirty,
          submitting,
          hasSubmitErrors
        }) => {
          return (
            <form className="login-form" onSubmit={handleSubmit}>
              <Input
                className="input"
                type="email"
                name="email"
                id="user-name"
                placeholder="Your E-mail"
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
                placeholder="Your Password"
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
                disabled={
                  submitting ||
                  (hasValidationErrors && !dirty) ||
                  (hasSubmitErrors && !dirtySinceLastSubmit)
                }
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

const mapStateToProps = state => {
  if (state.auth.userInfo) {
    return {
      isAuthorized: state.auth.isAuthorized,
      values: {
        email: state.auth.userInfo.userName,
        password: state.auth.userInfo.password
      }
    };
  } else {
    return {
      isAuthorized: state.auth.isAuthorized
    };
  }
};

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(loginAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
