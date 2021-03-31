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
  const [rotated, setRotated] = useState(false);
  return(
    <>
      <nav className='nav'>
        <div className="nav__logo">
          <img className="nav__logo__img" src="/images/logo.png" alt="logo for dev 30 27" />
        </div>

        <div className="nav__menu">
          <div><FaAngleDown className="nav__menu__btn" id={rotated ? "up" : "down"} onClick={() => {setShowNav(!shownav); setRotated(!rotated)}} /></div>
          <ul className='nav__menu__list' id={shownav ? "show" : "hidden"}>
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