import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ContactContents from "../components/ContactContents";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="akreact"/>
      <ContactContents />
      <Footer />
    </div>
  );
};

export default Contact;
