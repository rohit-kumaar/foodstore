import React from "react";
import MenuCard from "./MenuCard";
import food1 from "assets/food1.jpg";

function Menu() {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Menu</h2>
        <div>
          <MenuCard
            itemNum={1}
            foodScr={food1}
            foodName={"Barota"}
            price={200}
            title={"Barota"}
            handler={addToCartHandler}
            delay={0.2}
          />
          <MenuCard
            itemNum={2}
            foodScr={food1}
            foodName={"Barota"}
            price={400}
            title={"Barota"}
            handler={addToCartHandler}
            delay={0.4}
          />
          <MenuCard
            itemNum={3}
            foodScr={food1}
            foodName={"Barota"}
            price={600}
            title={"Barota"}
            handler={addToCartHandler}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

export default Menu;
