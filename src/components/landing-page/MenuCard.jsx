import React from "react";
import { motion } from "framer-motion";
import { animation } from "components/ui/animation";

function MenuCard({
  itemNum,
  foodScr,
  foodName,
  price,
  title,
  handler,
  delay,
}) {
  return (
    <motion.div
      className="menu-card"
      {...animation}
      transition={{
        delay,
      }}
    >
      <h2>Item {itemNum}</h2>

      <div>
        <img loading="lazy" src={foodScr} alt={foodName} title={foodName} />
        <h3>₹ {price}</h3>
        <p>{title}</p>
        <button className="btn" onClick={() => handler(itemNum)}>
          Buy Now
        </button>
      </div>
    </motion.div>
  );
}

export default MenuCard;
