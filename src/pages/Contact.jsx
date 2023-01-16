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

  const initialValue = {
    email: "",
    description: "",
    selectOption: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
  });
  const onSubmit = (value) => console.log("Form data", value);

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

              <button type="submit" className="btn mt-3">
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
