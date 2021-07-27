import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <nav className='nav'>
        <div className='nav__logo'>
          <Link to='/'>
            <img
              className='nav__logo__img'
              src='/images/logo.png'
              alt='logo for dev 30 27'
            />
          </Link>
        </div>
        <h2 className='nav__logo__name'>
          <Link to='/'>Developer3027</Link>
        </h2>
        <div className='nav__specials'>
          <Link to='/hermit-plus'>
            <h4>Hermit Plus</h4>
          </Link>
          <Link to='/nutrasite'>
            <h4>NutraSite</h4>
          </Link>
        </div>

        <div className='nav__menu'>
          <div>
            <FaAngleDown
              className='nav__menu__btn'
              id={rotated ? 'up' : 'down'}
              onClick={() => {
                setShowNav(!shownav);
                setRotated(!rotated);
              }}
            />
          </div>
          <ul className='nav__menu__list' id={shownav ? 'show' : 'hidden'}>
            <li>
              <FaMugHot />
              &nbsp;<Link to='/projects'>Projects</Link>
            </li>

            <li>
              <FaBoxOpen />
              &nbsp;Packages
            </li>
            <li>
              <FaRobot />
              &nbsp;Rive Bot
            </li>
            <li>
              <FaHandshake />
              &nbsp;Social
            </li>
            <li>
              <FaBook />
              &nbsp;Blog
            </li>
            <li>
              <FaPaperclip />
              &nbsp;Resume
            </li>
            <li>
              <FaUserAlt />
              &nbsp;Contact
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
