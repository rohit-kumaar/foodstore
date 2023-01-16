import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Textarea(props) {
  const { label, name, ...rest } = props;

  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...rest}
        className="form-control"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Textarea;
