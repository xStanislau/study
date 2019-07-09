import React, {Component} from "react";
import {Form} from "react-final-form";
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/input/Input';
import {checkPassword, checkEmail} from './../../../../utils/validation';
import {
  withRouter
} from 'react-router-dom'

class LoginForm extends Component {
  onSubmit = () => {
    this.props.history.push('/main-page');
  };

  validate = (values) => {
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
    return <Form
        onSubmit={this.onSubmit}
        validate={this.validate}
        render={({handleSubmit, pristine, invalid}) => (
            <form onSubmit={handleSubmit}>
              <Input
                  type="email"
                  name="email"
                  id="user-email"
                  placeholder="email@eample.com"
                  label="Email"
              />
              <Input
                  type="password"
                  name="password"
                  id="user-password"
                  placeholder="password"
                  label="Password"
              />
              <Button type="submit" className="btn-primary" disabled={pristine || invalid}>
                Login
              </Button>
            </form>
        )}
    />
  }
}

export default withRouter(LoginForm);