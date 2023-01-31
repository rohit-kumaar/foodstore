import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";

function OrderDetails() {
  return (
    <>
      <Header />

      <main className="order-details">
        <div className="container">
          <div className="order-details__detail">details</div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default OrderDetails;
