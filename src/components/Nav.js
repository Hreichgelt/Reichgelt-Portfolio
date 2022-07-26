import React from "react";

 function Nav({ currentPage, handlePageChange }) {
  return (
      <nav className="nav nav-tabs" style={{display: 'flex', justifyContent: 'flex-end', borderBottom: 'none'}}>
        <li className="nav-item">
            <a href="#About" onClick={() => handlePageChange('about')}
            className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
            >About</a>
        </li>
        <li className="nav-item">
            <a href="#Portfolio" onClick={() => handlePageChange('portfolio')}
            className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
            >Portfolio</a>
        </li>
        <li className="nav-item">
            <a href="#Contact" onClick={() => handlePageChange('contact')}
            className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
            >Contact</a>
        </li>
        <li className="nav-item">
            <a href="#Resume" onClick={() => handlePageChange('resume')}
            className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
            >Resume</a>
        </li>
      </nav>

  )
}

export default Nav;
