import React from "react";
import "./HeroImg3Styles.css";

const HeroImg3 = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImg3;
