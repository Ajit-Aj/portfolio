import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter-wemoji";
const HeroImg = () => {
  const [typeEffect] = useTypewriter({
    words: ["Hi, I'm Ajit"],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 400,
    cursor: true,
    delaySpeed: 1000,
    cursorStyle: "|",
  });
  const [typeEEffect] = useTypewriter({
    words: ["Mern developer"],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 400,
    cursor: true,
    delaySpeed: 1000,
    cursorStyle: "|",
  });
  return (
    <>
      <div className="hero">
        <div className="mask">
          {/* <img className="into-img" src={"https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFja2VyJTIwd2FsbHBhcGVyfGVufDB8MHwwfHx8MA%3D%3D"} alt="IntroImg" /> */}
          <img className="into-img" src={"https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfDB8MHx8fDA%3D"} alt="IntroImg" />
          {/* <img className="into-img" src={"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hdHJpeHxlbnwwfDB8MHx8fDA%3D"} alt="IntroImg" /> */}
        </div>
        <div className="content">
          <p>
            {typeEffect}
          </p>
          <h1>
            {typeEEffect}
            <Cursor />
          </h1>
          <div>
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImg;
