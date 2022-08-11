import React  from "react";
import Nav from '../components/Nav'
import ContactForm from "../components/ContactForm";
import Footer from '../components/Footer'
import HeroWrapper from "../components/HeroWrapper";

function Contact() {
  return (
    <div>
      <Nav />
      <HeroWrapper>
         <ContactForm />
      </HeroWrapper>
      <Footer />
    </div>
  );
}

export default Contact;

