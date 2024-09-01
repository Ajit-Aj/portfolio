import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
// import Project from "./Project";
// import Contact from "./Contact";
// import About from "./About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      {/* <Project /> 
      <About />
      <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;