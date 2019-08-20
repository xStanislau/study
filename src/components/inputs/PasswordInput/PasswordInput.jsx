import React, { Component } from "react";
import Input from "../../input/Input";
import Icon from "../../Icon/Icon";

class InputPassword extends Component {
  state = {
    visiblle: false
  };

  passwordInput = null;

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

  render() {
    const { visible } = this.state;
    const { togglePasswordVibility } = this;

    const eyeIconName = visible ? "eye" : "eye-slash";
    const inputType = visible ? "input" : "password";

    return (
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
    );
  }
}

export default InputPassword;
