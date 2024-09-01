// Footer.js
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./FooterStyles.css";
import React from "react";

const Footer = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/Ajit-Aj");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ajit-a-0774371a2");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/world_of_.aj/");
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="location">
          <h3>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            Chennai
          </h3>
        </div>
        <div className="phone">
          <h4>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            +91 9360232098
          </h4>
        </div>
        <div className="email">
          <h4>
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            ajitaj001@gmail.com
          </h4>
        </div>

        <div className="social">
          <h4>
            <FaGithub
              className="git"
              size={30}
              style={{
                marginRight: "1rem",
                cursor: "pointer",
              }}
              onClick={handleGitHubClick}
            />
            <FaLinkedin
              className="linkedIn"
              size={30}
              style={{
                marginRight: "1rem",
                cursor: "pointer",
              }}
              onClick={handleLinkedInClick}
            />
            <FaInstagram
              className="insta"
              size={30}
              style={{
                marginRight: "1rem",
                cursor: "pointer",
              }}
              onClick={handleInstagramClick}
            />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
