import React  from "react";
import Nav from '../components/Nav'
import ContactForm from "../components/ContactForm";
import Footer from '../components/Footer'
// import "./styles/form.css";

function Contact() {
  return (
    <div>
      <Nav />
      {/* <hero image heading='Contact Me' /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;