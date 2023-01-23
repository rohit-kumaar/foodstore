import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "components/form/FormikControl";
import { Country, State } from "country-state-city";
import { Link } from "react-router-dom";

function Shipping() {
  useTitle("FoodStore | Shipping");

  //   const countryOptions = [
  //     { key: "Select country", value: "" },
  //     { key: "India", value: "India" },
  //     { key: "Option 2", value: "option 2" },
  //     { key: "Option 3", value: "option 3" },
  //     { key: "Option 4", value: "option 4" },
  //   ];

  //   const stateOptions = [
  //     { key: "Select state", value: "" },
  //     { key: "Chhattisgarh", value: "Chhattisgarh" },
  //     { key: "Option 2", value: "option 2" },
  //     { key: "Option 3", value: "option 3" },
  //     { key: "Option 4", value: "option 4" },
  //   ];

  const initialValue = {
    houseNumber: "",
    city: "",
    // countryOption: "",
    stateOption: "",
    pinCode: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    houseNumber: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    // countryOption: Yup.string().required("Required"),
    stateOption: Yup.string().required("Required"),
    pinCode: Yup.number().required("Required"),
    pinCode: Yup.number().required("Required"),
    phoneNumber: Yup.number().required("Required"),
  });

  const onSubmit = (value) => {
    console.log("Form data", value);
    console.log("Saved data", JSON.parse(JSON.stringify(value)));
  };

  return (
    <>
      <Header />

      <div className="bg-primary overflow-auto">
        <div className="container">
          <section className="shipping">
            <Formik
              initialValues={initialValue}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <h1>Shipping Address</h1>
                  <FormikControl
                    control="input"
                    type="text"
                    label="House No."
                    name="houseNumber"
                    placeholder="Enter house no."
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    label="City"
                    name="city"
                    placeholder="Enter city"
                  />

                  {/* <FormikControl
                    control="select"
                    label="Country"
                    name="countryOption"
                    options={countryOptions}
                  /> */}

                  <div>
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country">
                      <option value="">Country</option>
                      {Country &&
                        Country.getAllCountries().map((country) => {
                          return (
                            <option
                              value={country.isoCode}
                              key={country.isoCode}
                            >
                              {country.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  {/* <FormikControl
                    control="select"
                    label="State"
                    name="stateOption"
                    options={stateOptions}
                  /> */}

                  <div>
                    <label htmlFor="state">State</label>
                    <select name="state" id="state">
                      <option value="">State</option>
                      {State &&
                        State.getStatesOfCountry("IN").map((state) => {
                          return (
                            <option value={state.isoCode} key={state.isoCode}>
                              {state.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <FormikControl
                    control="input"
                    type="number"
                    label="Pin Code"
                    name="pinCode"
                    placeholder="Enter pin code"
                  />

                  <FormikControl
                    control="input"
                    type="number"
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                  />

                  <button
                    type="submit"
                    className="btn"
                    disabled={!formik.isValid}
                  >
                    Confirm Order
                  </button>
                </Form>
              )}
            </Formik>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shipping;
