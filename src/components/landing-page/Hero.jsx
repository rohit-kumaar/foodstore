import { animation } from "components/ui/animation";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
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
        className="btn"
      >
        Explore Menu
      </motion.a>
    </section>
  );
}

export default Hero;
