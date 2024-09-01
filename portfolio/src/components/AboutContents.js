// AboutContents.js
import React from "react";
import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import { useTypewriter } from "react-simple-typewriter-wemoji";

// Import technology logos
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import bootstrap from "../assets/bootstrap.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongo.png";
import tailwindcss from "../assets/tailwindcss.png";
import materialUI from "../assets/mui.png";
import figma from "../assets/figma.png";

const technologyLinks = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "Bootstrap", image: bootstrap },
  { name: "JS", image: js },
  { name: "React", image: react },
  { name: "Node.js", image: node },
  { name: "MySQL", image: mysql },
  { name: "Express", image: express },
  { name: "Tailwind CSS", image: tailwindcss },
  { name: "Material UI", image: materialUI },
  { name: "Figma", image: figma },
  { name: "MongoDB", image: mongodb },
];

// URLs for technology links
const technologyURLs = {
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML.com",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  Bootstrap: "https://getbootstrap.com/",
  JS: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  React: "https://react.dev/",
  "Node.js": "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
  MySQL: "https://dev.mysql.com/doc/mysql-tutorial-excerpt/8.0/en/",
  Express: "https://expressjs.com/",
  "Tailwind CSS": "https://tailwindcss.com/",
  "Material UI": "https://v4.mui.com/",
  Figma: "https://www.figma.com/",
  MongoDB: "https://www.mongodb.com/",
};

const AboutContents = () => {
  const [typeEffect] = useTypewriter({
    words: ["Toys I Play With"],
    loop: 1,
    typeSpeed: 200,
    deleteSpeed: 400,
    cursor: true,
    cursorStyle: "|",
  });

  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>I'm a Software developer. Crafting secure, responsive web experiences..</p>
        <Link to="/contact" style={{ boxShadow: "0 2px 33px 0 rgb(143, 137, 27);" }}>
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="technologies">
        <div className="technologies-head">
          <h1>
            <i>{typeEffect}</i>
          </h1>
        </div>

        <div className="technology-container">
          {technologyLinks.map((tech, index) => (
            <a
              key={tech.name}
              href={technologyURLs[tech.name]}
              target="_blank"
              rel="noreferrer"
              className="technology-card"
            >
              <img src={tech.image} alt={tech.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContents;
