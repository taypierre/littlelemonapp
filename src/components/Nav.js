import React, { useState } from 'react'
import logo from '../images/littlelemonlogo.png'

const Nav = () => {
    const [menuOpen , setOpenMenu] = useState(false);

    const toggleMenu = ()=>{
        setOpenMenu(!menuOpen);
    }
  return (
    // If menuOpen is true, the className will be "navbar open".
    <nav className={`navbar ${menuOpen ? "open" : ""}`}> 
        <a href='/' className='logo'>
            <img src={logo} alt='logo' />
        </a>


        {/* mobile phone navbar */}
        <div className='menu-icon'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        {/* Nav items */}
        {/* If menuOpen is true, the className will be "nav-links visible". */}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>About</a>
            </li>
            <li>
                <a href='/'>Menu</a>
            </li>
            <li>
                <a href='/'>Reservations</a>
            </li>
            <li>
                <a href='/'>Order Online</a>
            </li>
            <li>
                <a href='/'>Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav