import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "components/form/FormikControl";

function ConfirmOrder() {
  useTitle("FoodStore | Confirm Order");

  const cashOnDeliveryOptions = [{ key: "Payment", value: "rPayment" }];
  const onlineOptions = [{ key: "Online", value: "rOnline" }];

  const initialValue = {
    cashOnDeliveryOption: "",
    onlineOption: "",
  };

  const validationSchema = Yup.object({
    cashOnDeliveryOption: Yup.string().required("Required"),
    // onlineOption: Yup.string().required("Required"),
  });

  const onSubmit = (value) => {
    console.log("Form data", value);
    console.log("Saved data", JSON.parse(JSON.stringify(value)));
  };

  return (
    <>
      <Header />

      <main className="bg-primary overflow-hidden">
        <div className="container">
          <section className="confirm-order ">
            <Formik
              initialValues={initialValue}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <h1>Confirm Order</h1>

                  <FormikControl
                    control="radio"
                    label="Cash On Delivery"
                    name="confirmOrder"
                    options={cashOnDeliveryOptions}
                  />

                  <FormikControl
                    control="radio"
                    label="Online"
                    name="confirmOrder"
                    options={onlineOptions}
                  />

                  <button
                    type="submit"
                    className="btn"
                    // disabled={!formik.isValid}
                  >
                    Place Order
                  </button>
                </Form>
              )}
            </Formik>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ConfirmOrder;
