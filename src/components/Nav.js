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
    <div className={color ? "header header-bg" : "header"}>
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
      </ul>
      <div className="burgers" onClick={handleClick}>
        {click ? (
          <TiTimesOutline size={18} style={{ color: "green" }} />
        ) : (
          <RiMenu5Fill size={18} style={{ color: "green" }} />
        )}
      </div>
    </div>
  );
};

export default Nav;

//   <nav className="nav nav-tabs" style={{display: 'flex', justifyContent: 'flex-end', borderBottom: 'none'}}>
//     <li className="nav-item">
//         <a href="#About" onClick={() => handlePageChange('about')}
//         className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
//         >About</a>
//     </li>
//     <li className="nav-item">
//         <a href="#Portfolio" onClick={() => handlePageChange('portfolio')}
//         className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
//         >Portfolio</a>
//     </li>
//     <li className="nav-item">
//         <a href="#Contact" onClick={() => handlePageChange('contact')}
//         className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
//         >Contact</a>
//     </li>
//     <li className="nav-item">
//         <a href="#Resume" onClick={() => handlePageChange('resume')}
//         className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
//         >Resume</a>
//     </li>
//   </nav>
