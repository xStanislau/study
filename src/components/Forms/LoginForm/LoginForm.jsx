import React, { Component } from "react";
import { Form } from "react-final-form";
import { ButtonWithLoader } from "../../Button/Button";
import Input from "../../input/Input";
import Icon from "../../Icon/Icon";
import { checkPassword, checkEmail } from "../../../utils/validation";
import { withRouter } from "react-router-dom";
import { logIn as loginAction } from "../../../redux/reducers/auth";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./LoginForm.scss";

class LoginForm extends Component {
  state = {
    visiblle: false
  };

  onSubmit = async values => {
    const response = await this.props.login(values);

    if (response) {
      return { email: response.error.message };
    }
  };

  togglePasswordVibility = () => {
    this.setState(state => {
      return {
        visible: !state.visible
      };
    });
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
                type={inputType}
                name="password"
                id="user-password"
                placeholder="Your Password"
                label="Password"
                withicon
                formGroupClass="password-group"
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
                <NavLink to="#" className="forgot-password">
                  Forgot password
                </NavLink>
              </div>
              <ButtonWithLoader
                isLoad={isAuthorized || !submitting}
                type="submit"
                className="btn btn-primary"
                disabled={
                  submitting ||
                  (hasValidationErrors && !dirty) ||
                  (hasSubmitErrors && !dirtySinceLastSubmit)
                }
              >
                Login
              </ButtonWithLoader>
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
