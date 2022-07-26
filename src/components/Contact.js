import React, { useState } from 'react';
// import './style.css';

const styles = {
  form: {
    margin: 200,
    background: "#e8eaf6",
  },
  heading: {
    background: "cadetblue",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 20,

  },
};


function Contact() {
const [email, setEmail] = useState('');
const [textArea, setTextArea] = useState('');

const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === 'email' ? setEmail(value) : setTextArea(value);
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${email}, your submission has been recieved! Please allow 24 hours for my response.`);
    setEmail('');
    setTextArea('');
};

return ( 
  <main>
    <h2>Contact Me</h2>
  <div style={styles.form}> 
  <div style={styles.heading}>Contact Me</div>
    <form className="form">
    <input style={styles.content}
      value={email}
      name="email"
      onChange={handleInputChange}
      type="email"
      placeholder="email"
    />
    <input style={styles.content}
      value={textArea}
      name="textArea"
      maxLength="300"
      onChange={handleInputChange}
      type="text"
      placeholder="Text"
    />
    <button type="button" onClick={handleFormSubmit}>
      Submit
    </button>
    </form>
  </div> 
  </main>
);
}

export default Contact;





