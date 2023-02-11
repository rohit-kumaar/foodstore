import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { motion } from "framer-motion";

function Loader() {
  const options = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      ease: "linear",
      repeat: "Infinity",
      repeatType: "reverse",
    },
  };

  return (
    <div className="loader">
      <GiFoodTruck />

      <div>
        <motion.p {...options}>Loading...</motion.p>
      </div>
    </div>
  );
}

export default Loader;
