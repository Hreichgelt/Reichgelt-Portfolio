import React from 'react';
import forest from './assets/forest.jpg'
import './styles/header.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
    <div className='header'>
        <div className='headercover'>
            <img className='header-img' src={ forest } alt='forest'></img>
        </div>
        <div className='content'>
            <p>Hans's Portfolio</p>
            <p>Welcome!</p>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/About' className='btn'>About</Link>
            </div>
        </div>
    </div>
    )
}

export default Header;