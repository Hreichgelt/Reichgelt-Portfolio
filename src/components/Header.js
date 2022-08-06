import React from 'react';
import longs from './assets/longs.JPG'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <div className='header'>
        <div className='headercover'>
            <img className='header-img' src={ longs } alt='Longs Peak'></img>
        </div>
        <div className='content'>
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