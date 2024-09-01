import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import "./ContactContentsStyles.css"
const ContactContents = () => {
  const socials = [
    {
      icon: "github.svg",
      url: "https://github.com/randilt",
    },
    {
      icon: "linkedin.svg",
      url: "https://www.linkedin.com/in/randiltharusha/",
    },
    {
      icon: "instagram.svg",
      url: "https://www.instagram.com/itz_toxic03/",
    },
    {
      icon: "facebook.svg",
      url: "https://facebook.com/profile.php?id=100089910035602",
    },
  ];

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{" "}
          <a href="mailto:randiltharusha72@gmail.com">email</a>. 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
           ajitaj001@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />

            +91 9360232098
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
           Chennai, Tamilnadu
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form name="contact" netlify>
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
          />
          <input type="text" name="senderEmail" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default ContactContents