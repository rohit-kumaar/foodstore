import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function FormInput(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field id={name} name={name} {...rest} className="form-control" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default FormInput;
