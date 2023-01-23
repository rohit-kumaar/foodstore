import { motion } from "framer-motion";
import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";
import { FcGoogle } from "react-icons/fc";

function Login() {
  useTitle("FoodStore | Login");

  return (
    <>
      <Header />

      <main className="login">
        <section className="container">
          <div className="login__content">
            <motion.button
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              className="btn"
            >
              Login with Google <FcGoogle />
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Login;
