import React, { Component } from "react";
import { Form } from "react-final-form";
import Button from "../../Button/Button";
import Input from "../../input/Input";
import Icon from "../../Icon/Icon";
import { checkEmail } from "../../../utils/validation";
import { validationErrors } from "../../../constants/validationErrors";
import Loader from "../../Loader/Loader";

class ForgotPassword extends Component {
  state = {
    visiblle: false
  };

  validate = values => {
    const { email } = validationErrors;
    const errors = {};

    if (!checkEmail(values.email)) {
      errors.email = email;
    }

    return errors;
  };

  onSubmit = async values => {
    window.alert(JSON.stringify(values, 0, 2));
  };
  render() {
    const { isAuthorized, values } = this.props;
    const { validate } = this;
    if (isAuthorized) {
      this.props.history.push("/profile");
    }

    return (
      <Form
        onSubmit={this.onSubmit}
        autocomplete
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
            <form className="form forgot-form" onSubmit={handleSubmit}>
              {(isAuthorized || submitting) && <Loader />}
              <h2 className="text-left title h4">Reset your password</h2>
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
              <Button
                type="submit"
                className="btn btn-primary"
                disabled={
                  submitting ||
                  (hasValidationErrors && !dirty) ||
                  (hasSubmitErrors && !dirtySinceLastSubmit)
                }
              >
                Reset Password
              </Button>
            </form>
          );
        }}
      />
    );
  }
}

export default ForgotPassword;
