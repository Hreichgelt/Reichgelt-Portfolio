import React from "react";
import linkin from "../components/assets/linkin.png";
import github from "../components/assets/github.png";
import email from "../components/assets/email.png";
import youtube from '../components/assets/youtube.png'
import "./styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-contain">
        <div className="center">
          <p className="nav-item">
            <a
              href="https://www.linkedin.com/in/hans-reichgelt/"
              target='_blank'
              alt="LinkedIn Link"
            >
              <img
                className="icon"
                src={linkin}
                alt="LinkedIn Link"
                width="64"
              ></img>
            </a>
          </p>

          <p className="nav-item">
            <a href="https://github.com/Hreichgelt" target='_blank' alt="Github Link">
              <img
                className="icon"
                src={github}
                alt="Github Link"
                width="64"
              ></img>
            </a>
          </p>
          <p className="nav-item">
            <a href="https://www.youtube.com/channel/UCpuDNUB8EyQp5vdTxaxAMmg" target='_blank' alt="Youtube">
              <img
                className="icon"
                src={youtube}
                alt="Youtube Link"
                width="64"
              ></img>
            </a>
          </p>
          <p className="nav-item">
            <a href="mailto: hreichgelt@gmail.com" alt="Email Link">
              <img
                className="icon"
                src={email}
                alt="email Link"
                width="64"
              ></img>
            </a>
          </p>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Footer;

{
  /* 



          //     className="nav nav-tabs"
  //     style={{
  //       position: 'fixed',
  //       left: 0,
  //       bottom: 0,
  //       width: '100%',
  //       display: "flex-row",
  //       justifyContent: "center",
  //       borderBottom: "none",
  //       backgroundColor: 'cadetblue',
  //       justifySelf: "flex-end"

  //     }}
  //   >
      
  // */
}
// <footer
//   </footer>
