import React from "react";
import me from "assets/rohit.jpeg";
import { motion } from "framer-motion";
import { animation } from "components/ui/animation";
import { Link } from "react-router-dom";

function Founder() {

  return (
    <>
      <section className="founder">
        <div className="container">
          <motion.div {...animation}>
            <Link to="#" className="img-wrapper">
              <img loading="lazy" src={me} alt="Rohit Kumar" />
              <h3>Rohit Kumar</h3>
            </Link>
            <p>
              Hey, Everyone I am Rohit Kumar, the founder of FoodSTORE.
              <br />
              Our aim is to create the most tasty Food on Planet.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Founder;
