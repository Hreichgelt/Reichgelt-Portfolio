import React from "react";
import linkin from "../components/assets/linkin.png";
import github from "../components/assets/github.png";
import email from "../components/assets/email.png";

function Footer() {
  return (
    <footer
      className="nav nav-tabs"
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        display: "flex-row",
        justifyContent: "center",
        borderBottom: "none",
        backgroundColor: 'cadetblue',
        justifySelf: "flex-end"

      }}
    >
      
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/hans-reichgelt/"
            alt="LinkedIn Link"
          >
            <img className="icon" src={linkin} alt="LinkedIn Link" width='64'></img>
          </a>
        </li>

        <li className="nav-item">
          <a href="https://github.com/Hreichgelt" alt="Github Link">
            <img className="icon" src={github} alt="LinkedIn Link" width='64'></img>
          </a>
        </li>
        <li className="nav-item">
          <a href="mailto: hreichgelt@gmail.com" alt="Email Link">
            <img className="icon" src={email} alt="LinkedIn Link" width='64'></img>
          </a>
        </li>
    </footer>
  );
}

export default Footer;
