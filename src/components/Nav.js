import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiTimesOutline } from "react-icons/ti";
import { RiMenu5Fill } from "react-icons/ri";
import './styles/nav.css'

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor)
  return (
    <div className="nav nav-bg">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Project">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Me</Link>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1uhdc2ttA7k1YsNZV1MrDuJAU0cEkfuyJ/view?usp=https://docs.google.com/document/d/1CslrhsRFOw027dqn-rbcTOQUqrJbf4RMi2ODyBJ8c7s/edit?usp=sharing">Resume</a>
        </li>
      </ul>
      <div className="burgers" onClick={handleClick}>
        {click ? (<TiTimesOutline size={18} style={{ color: "#f5deb3" }} />) 
        : (<RiMenu5Fill size={18} style={{ color: "#f5deb3" }} />)}
      </div>
    </div>
  );
};

export default Nav;