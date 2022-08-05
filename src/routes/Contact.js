import React, { useState } from "react";
import Nav from '../Nav'
import ContactForm from "./ContactForm";
import Footer from '../Footer'
import "./styles/form.css";

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
