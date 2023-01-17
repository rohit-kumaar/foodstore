import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function Checkbox(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest} className="form-check">
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  className="form-check-input"
                />

                <label htmlFor={option.value} className="form-check-label">
                  {option.key}
                </label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Checkbox;
