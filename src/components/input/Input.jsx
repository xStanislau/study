import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";

const Input = ({
  className,
  name,
  type,
  placeholder,
  id,
  disabled,
  label,
  children
}) => {
  return (
    <Field
      name={name}
      type={type}
      disabled={disabled}
      render={({ input, meta }) => {
        return (
          <div className="form-group">
            {label && <label htmlFor={id}>{label}</label>}
            <input
              className={className}
              id={id}
              placeholder={placeholder}
              {...input}
            />
            {children}
            {meta.touched && meta.error && (
              <span className="text-danger">{meta.error}</span>
            )}
          </div>
        );
      }}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

Input.defaultProps = {
  className: "form-control",
  type: "text",
  disabled: false
};

export default Input;
