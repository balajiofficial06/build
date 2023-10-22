import React from 'react';
import './navbar.css';
import contact from '../../assets/contact.png';
import { Link } from 'react-scroll'
import logo from '../../assets/logo.png'


function Navbar() {

    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='desktopLogo' />
            <div className='desktopMenu'>
                <Link className='desktopMenuListIteam'>Home</Link>
                <Link className='desktopMenuListIteam'>About</Link>
                <Link className='desktopMenuListIteam'>Projects</Link>
                <Link className='desktopMenuListIteam'>Education</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={contact} alt="" className='contactImg' />
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar