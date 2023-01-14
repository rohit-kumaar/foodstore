import React from "react";
import me from "assets/rohit.jpeg";
import { motion } from "framer-motion";

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

function Founder() {
  return (
    <>
      <section className="founder">
        <motion.div {...animation}>
          <img src={me} alt="Rohit Kumar" title="Rohit Kumar" />
          <h3>Rohit Kumar</h3>
          <p>
            Hey, Everyone I am Rohit Kumar, the founder of Foodtato.
            <br />
            Our aim is to create the most tasty Food on Planet.
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default Founder;
