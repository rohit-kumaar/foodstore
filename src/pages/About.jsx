import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React from "react";
import { BsSearch } from "react-icons/bs";
import me from "assets/rohit.jpeg";
import { Link } from "react-router-dom";

function About() {
  useTitle("FoodStore | About");

  return (
    <>
      <Header />

      <main className="about">
        <h1>about us</h1>

        <div className="container">
          <section className="about__content">
            <article>
              <h2>FoodStore</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                labore iure asperiores, quo laudantium quia culpa, veritatis
                quod exercitationem minus necessitatibus a quisquam tempora vel
                ipsa animi, repellat magni aut!
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                labore iure asperiores, quo laudantium quia culpa, veritatis
                quod exercitationem minus necessitatibus a quisquam tempora vel
                ipsa animi, repellat magni aut!
              </p>

              <Link to="#">
                <BsSearch />
              </Link>
            </article>
          </section>
        </div>

        <section>
          <h3>Founder</h3>
          <div>
            <img
              loading="lazy"
              src={me}
              alt="Rohit Kumar"
              title="Rohit Kumar"
            />

            <p>
              Hey, Everyone I am Rohit Kumar, the founder of FoodSTORE. <br />
              Our aim is to create the most tasty Food on Planet.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
