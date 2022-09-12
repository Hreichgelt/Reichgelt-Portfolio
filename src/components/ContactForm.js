import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// import forest from "./assets/forest.jpg";
import "./styles/form.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjbroaz");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    
    <form className="contact" onSubmit={handleSubmit}>
      <h1>Contact Me</h1>
      <div className="email">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="formControll"
          placeholder="name@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="message">
        <textarea
          className="input"
          id="message"
          name="message"
          rows={7}
          placeholder="Your message here"
        />
      </div>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="btn btn-primary mb-3"
        id="boot"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
      {/* <a href='mailto: hreichgelt06@gmail.com' className='btn'>Hreichgelt06@gmail.com</a> */}
    </form>
  );
}

export default ContactForm;
