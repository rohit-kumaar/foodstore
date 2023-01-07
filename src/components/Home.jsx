import { useTitle } from "hooks/useTitle";
import React from "react";
import Header from "./Header";

function Home() {
  useTitle("Home");

  return (
    <>
      <Header />

      <section className="home">
        <div>
          <h1>Foodtato</h1>
          <p>Give yourself a tasty burger</p>
        </div>

        <a href="#menu">Explore Menu</a>
      </section>
    </>
  );
}

export default Home;
