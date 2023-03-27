import React from 'react';
import { SiReact } from 'react-icons/si';
import { Link } from 'react-router-dom';
import "../CSS/Header.css";

function Header() {
    return (
        <div className="Header">
            <div>
                <Link to="/" className='link icon'> <SiReact/> </Link>
            </div>
            <div className='all-links'>
                <Link to="/About" className='link'>About</Link>
                <Link to="/Contact" className='link'>Contact</Link>
                <Link to="/Registration" className='link'>Register</Link>
                <Link to="Login" className='link'>Login</Link>
            </div>
        </div>
    )
}
export default Header;