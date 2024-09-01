import React from "react";
import "./HeroImg2Styles.css";
import { useTypewriter, Cursor } from "react-simple-typewriter-wemoji";

const HeroImg2 = (props) => {
  const [typeEffect] = useTypewriter({
    words: ["Web developer"],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 400,
    cursor: true,
    delaySpeed: 1000,
    cursorStyle: "|",
  });
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      
      </div>
    </div>
  );
};

export default HeroImg2;
