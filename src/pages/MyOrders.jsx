import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function MyOrders() {
  useTitle("FoodStore | My Order");

  return (
    <>
      <Header />

      <main className="my-orders">
        <div className="container">
          <div className="table-responsive my-orders__table">
            <table className="table table-dark table-striped table-hover table-bordered  caption-top">
              <caption>
                <h1 className="text-center">My Order Details</h1>
              </caption>

              <thead>
                <tr >
                  <th>Order ID</th>
                  <th>Status</th>
                  <th>Item Qty</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-light">
                <tr>
                  <td>01</td>
                  <td>Processing</td>
                  <td>23</td>
                  <td>₹ 2391</td>
                  <td>COD</td>
                  <td>
                    <Link to="/order-details">
                      <AiOutlineEye />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MyOrders;
