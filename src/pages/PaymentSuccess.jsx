import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "routes/routePath";

function PaymentSuccess() {
  useTitle("FoodStore | Payment Success");

  return (
    <>
      <Header />

      <main className="container payment-success">
        <section>
          <h1>Order Confirmed</h1>
          <p>Order Placed Successfully, You can check order status below.</p>
          <Link to={`${ROUTE_PATH.myOrders}`} className="btn">
            Check Status
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PaymentSuccess;
