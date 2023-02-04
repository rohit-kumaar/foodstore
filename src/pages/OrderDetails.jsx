import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";

function OrderDetails() {
  useTitle("FoodStore | Order Details");

  return (
    <>
      <Header />

      <main className="order-details">
        <div className="card">
          <h1 className="card-header">ORDER DETAILS</h1>
          <div className="card-body">
            <ul>
              <li>Shipping</li>
              <li>Contact</li>
              <li>Status</li>
              <li>Payment</li>
              <li>Amount</li>
            </ul>
            <ul>
              <li>
                <div>
                  Address : <span>Pune</span>
                </div>
              </li>
              <li>
                <div>
                  Name : <span>Rohit Kumar</span>
                </div>
                <div>
                  Phone Number : <span>9668231410</span>
                </div>
              </li>
              <li>
                <div>
                  Order Status : <span>Processing</span>
                </div>
                <div>
                  Placed At : <span>03-Feb-23</span>
                </div>
                <div>
                  Delivery At : <span>03-Feb-23</span>
                </div>
              </li>
              <li>
                <div>
                  Payment Method : <span>Online</span>
                </div>
                <div>
                  Payment Reference : <span>#6468393647</span>
                </div>
                <div>
                  Paid At : <span>03-Feb-23</span>
                </div>
              </li>

              <li>
                <div>
                  Item Total : <span>₹ 2384</span>
                </div>
                <div>
                  Sipping Charge : <span>₹ 299</span>
                </div>
                <div>
                  Tax : <span>₹ 299</span>
                </div>
                <div>
                  Total Amount : <span>₹ {2384 + 299 + 299}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default OrderDetails;
