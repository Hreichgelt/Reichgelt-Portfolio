import React from 'react';
import Nav from './Nav';

function Header({ currentPage, handlePageChange }) {
    return (
        <header className='hero' style={{ backgroundColor: 'cadetblue' }}>
            <h1 className='title' style={{ fontFamily: 'cursive' }} >Hans Reichgelt</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}

export default Header;