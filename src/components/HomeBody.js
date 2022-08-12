import React from 'react';
import './styles/homebody.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
    <div className='homebody'>
        <div className='content'>
            <h1>Hans Reichgelt's Portfolio</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/About' className='btn'>About</Link>
                <a href='mailto: hreichgelt06@gmail.com' className='btn'>Hreichgelt06@gmail.com</a>
            </div>
        </div>
    </div>
    )
}
export default Header;