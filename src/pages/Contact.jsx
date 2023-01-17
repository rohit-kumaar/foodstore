import Header from "layouts/Header";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "components/form/FormikControl";
import { useTitle } from "hooks/useTitle";

function Contact() {
  useTitle("Contact Us");

  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "Option 1" },
    { key: "Option 2", value: "option 2" },
    { key: "Option 3", value: "option 3" },
    { key: "Option 4", value: "option 4" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "rOption 1" },
    { key: "Option 2", value: "rOption 2" },
    { key: "Option 3", value: "rOption 3" },
  ];

  const checkboxOptions = [
    { key: "Option 1", value: "cOption 1" },
    { key: "Option 2", value: "cOption 2" },
    { key: "Option 3", value: "cOption 3" },
  ];

  const initialValue = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email formate").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (value) => {
    console.log("Form data", value);
    console.log("Saved data", JSON.parse(JSON.stringify(value)));
  };

  return (
    <>
      <Header />

      <div className="container">
        <Formik
          className="contact"
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />

              <FormikControl
                control="textarea"
                label="Description"
                name="description"
              />

              <FormikControl
                control="select"
                label="Select a topic"
                name="selectOption"
                options={dropdownOptions}
              />

              <FormikControl
                control="radio"
                label="Radio Topic"
                name="radioOption"
                options={radioOptions}
              />

              <FormikControl
                control="checkbox"
                label="Checkbox topic"
                name="checkboxOption"
                options={checkboxOptions}
              />

              <FormikControl
                control="date"
                label="Pick a date"
                name="birthDate"
              />

              <button
                type="submit"
                className="btn mt-3"
                disabled={!formik.isValid}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Contact;
