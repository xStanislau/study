import React, { Component } from "react";
import { Form } from "react-final-form";
import Button from "../../Button/Button";
import Input from "../../input/Input";
import Icon from "../../Icon/Icon";
import { checkPassword, checkEmail } from "../../../utils/validation";
import { withRouter } from "react-router-dom";
import { logIn } from "../../../redux/reducers/auth";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { validationErrors } from "../../../constants/validationErrors";

class LoginForm extends Component {
  state = {
    visiblle: false
  };

  passwordInput = null;

  onSubmit = async values => {
    const response = await this.props.logIn(values);

    if (response) {
      return { email: response.error.message };
    }
  };

  focusPasswordInput = () => {
    if (this.passwordInput) this.passwordInput.focus();
  };

  togglePasswordVibility = () => {
    this.setState(state => {
      return {
        visible: !state.visible
      };
    });
    this.focusPasswordInput();
  };

  validate = values => {
    const { password, email } = validationErrors;
    const errors = {};
    if (!checkPassword(values.password)) {
      errors.password = password;
    }
    if (!checkEmail(values.email)) {
      errors.email = email;
    }

    return errors;
  };

  render() {
    const { isAuthorized, values } = this.props;
    const { visible } = this.state;
    const { onSubmit, validate, togglePasswordVibility } = this;

    if (isAuthorized) {
      this.props.history.push("/profile");
    }

    const eyeIconName = visible ? "eye" : "eye-slash";
    const inputType = visible ? "input" : "password";

    return (
      <Form
        autocomplete
        onSubmit={onSubmit}
        validate={validate}
        initialValues={values && values}
        render={({
          handleSubmit,
          dirtySinceLastSubmit,
          hasValidationErrors,
          dirty,
          submitting,
          hasSubmitErrors
        }) => {
          return (
            <form className="form login-form" onSubmit={handleSubmit}>
              {(isAuthorized || submitting) && <Loader />}
              <h2 className="text-left title h4">Login your account</h2>
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
                type={inputType}
                name="password"
                id="user-password"
                placeholder="Your Password"
                label="Password"
                withicon
                formGroupClass="password-group"
                inputRef={el => (this.passwordInput = el)}
              >
                <Icon name="lock" className="l-icon-center-left" />
                <Icon
                  name={eyeIconName}
                  className="l-icon-center-right"
                  onClick={togglePasswordVibility}
                />
              </Input>
              <div className="d-flex justify-content-between">
                <Input
                  className="checkbox"
                  formGroupClass="checkbox-group"
                  name="rememberMe"
                  type="checkbox"
                  id="remember-me"
                  label="Remember me"
                >
                  <label
                    className="checkmark solitude-text"
                    htmlFor="remember-me"
                  />
                  >
                </Input>
                <NavLink to="/forgot" className="forgot-password">
                  Forgot password
                </NavLink>
              </div>
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

export default connect(
  mapStateToProps,
  { logIn }
)(withRouter(LoginForm));
