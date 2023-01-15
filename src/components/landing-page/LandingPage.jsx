import { useTitle } from "hooks/useTitle";
import React from "react";
import Header from "layouts/Header";
import Founder from "./Founder";
import Menu from "./Menu";
import Footer from "layouts/Footer";
import Hero from "./Hero";

function Home() {
  useTitle("Home");

  return (
    <>
      <Header />
      <Hero />
      <Founder />
      <Menu />
      <Footer />
    </>
  );
}

export default Home;
