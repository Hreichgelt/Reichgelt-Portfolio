import React, { useState } from "react";
import "./styles/form.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === "email" ? setEmail(value) : setTextArea(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${email}, Unfortunately this form is disabled, check back later for functionality.`
    );
    setEmail("");
    setTextArea("");
  };

  return (
    <main>
      <h2>Contact Me</h2>
      <div class="form mb-3">
        <label for={email} onChange={handleInputChange} class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>

      <div class="input mb-3">
        <label for={textArea} onChange={handleInputChange} class="form-label">
          Text Area
        </label>
        <textArea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
        ></textArea>
      </div>
      <div class="boot">
      <button class="btn btn-primary mb-3" type="submit" onClick={handleFormSubmit}>
        Submit
      </button>
      </div>
    </main>
  );
}

export default Contact;
