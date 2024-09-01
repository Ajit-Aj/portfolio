import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContents from "../components/AboutContents";
import { useTypewriter, Cursor } from "react-simple-typewriter-wemoji";

const About = () => {
  const [typeEffect] = useTypewriter({
    words: ["I am a friendly Developer."],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 400,
    cursor: true,
    cursorStyle: "|",
  });
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text={typeEffect}>
        <Cursor />
      </HeroImg2>
      <AboutContents />
      <Footer />
    </div>
  );
};
export default About;
