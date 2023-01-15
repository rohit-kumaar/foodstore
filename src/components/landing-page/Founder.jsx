import React from "react";
import me from "assets/rohit.jpeg";
import { motion } from "framer-motion";
import { animation } from "components/ui/animation";

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
