import { useTitle } from "hooks/useTitle";
import React from "react";
import Header from "layouts/Header";
import { motion } from "framer-motion";
import Founder from "./Founder";

function Home() {
  useTitle("Home");

  const animation = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Header />

      <section className="home">
        <div>
          <motion.h1 {...animation}>Foodtato</motion.h1>
          <motion.p
            {...animation}
            transition={{
              delay: 0.2,
            }}
          >
            Give yourself a tasty burger
          </motion.p>
        </div>

        <motion.a
          href="#menu"
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore Menu
        </motion.a>
      </section>

      <Founder />
    </>
  );
}

export default Home;
