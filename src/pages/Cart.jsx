import CartItem from "components/CartItem";
import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";
import { Link } from "react-router-dom";
import food1 from "../assets/food1.jpg";
import { ROUTE_PATH } from "routes/routePath";

function Cart() {
  useTitle("FoodStore | Cart");

  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <>
      <Header />
      <div className="container">
        <section className="cart">
          <CartItem
            value={0}
            title={"Cheese Burger"}
            img={food1}
            increment={() => increment(1)}
            decrement={() => decrement(1)}
          />
        </section>

        <section className="cart-total">
          <div>
            <b>Sub Total : </b>
            <span>₹ {2000}</span>
          </div>

          <div>
            <b>Tax : </b>
            <span>₹ {2000 * 0.18}</span>
          </div>

          <div>
            <b>Shipping Charges : </b>
            <span>₹ {200}</span>
          </div>

          <div>
            <b>Total : </b>
            <span>₹ {7000}</span>
          </div>

          <Link to={`${ROUTE_PATH.shipping}`} className="btn">
            Checkout
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
