import React, { useState } from 'react';

import {
  FaMugHot,
  FaBoxOpen,
  FaRobot,
  FaPaperclip,
  FaHandshake,
  FaBook,
  FaUserAlt,
  FaAngleDown
} from 'react-icons/fa';
import './style.css';

const Navbar = () => {
  const [shownav, setShowNav] = useState(false);
  const [rotated, setRotated] = useState(true);
  return(
    <>
      <nav className='navbar'>
        <div className="nav-logo">
          <img className="logo-img" src="/images/logo.png" alt="logo for dev 30 27" />
        </div>

        <div className="nav-menu">
          <div><FaAngleDown className="menu-btn" id={rotated ? "up" : "down"} onClick={() => {setShowNav(!shownav); setRotated(!rotated)}} /></div>
          <ul className='nav-ul-menu' id={shownav ? "hidden" : ""}>
            <li><FaMugHot/>&nbsp;Projects</li>
            <li><FaBoxOpen/>&nbsp;Packages</li>
            <li><FaRobot/>&nbsp;Rive Bot</li>
            <li><FaHandshake/>&nbsp;Social</li>
            <li><FaBook/>&nbsp;Blog</li>
            <li><FaPaperclip/>&nbsp;Resume</li>
            <li><FaUserAlt/>&nbsp;Contact</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;