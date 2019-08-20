import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import classNames from "classnames";
import "./Input.scss";

const Input = ({
  className,
  formGroupClass,
  name,
  type,
  placeholder,
  id,
  disabled,
  label,
  children,
  withicon,
  inputRef
}) => {
  const withIcon = classNames("input-container", { withicon });
  const classess = classNames("form-control", className);
  return (
    <Field
      name={name}
      type={type}
      disabled={disabled}
      render={({ input, meta }) => {
        return (
          <>
            {meta.touched && meta.submitError && !meta.dirtySinceLastSubmit && (
              <span className="text-danger">{meta.submitError}</span>
            )}
            <div className={`${formGroupClass} form-group `}>
              {label && <label htmlFor={id}>{label}</label>}
              <div className={withIcon}>
                <input
                  className={classess}
                  id={id}
                  placeholder={placeholder}
                  ref={inputRef}
                  {...input}
                />
                {children}
              </div>
              {meta.touched && meta.error && (
                <span className="text-danger">{meta.error}</span>
              )}
            </div>
          </>
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
  type: "text",
  disabled: false
};

export default Input;
