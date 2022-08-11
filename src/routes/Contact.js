import React  from "react";
import Nav from '../components/Nav'
import ContactForm from "../components/ContactForm";
import Footer from '../components/Footer'
import HeaderImg from "../components/HeaderImg";

function Contact() {
  return (
    <div>
      <Nav />
      {/* <HeaderImg /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;