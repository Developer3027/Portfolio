import {
  FaMugHot,
  FaBoxOpen,
  FaRobot,
  FaPaperclip,
  FaTwitter,
  FaLinkedin,
  FaBook,
  FaUserAlt
} from 'react-icons/fa';
import './style.css';

const Navbar = () => {
  return(
    <>
      <nav className='navbar'>
        <div className="nav-left">
          <ul className='nav-ul-left'>
            <li><FaMugHot/>&nbsp;Projects</li>
            <li><FaBoxOpen/>&nbsp;Packages</li>
            <li><FaPaperclip/>&nbsp;Resume</li>
            <li><FaRobot/>&nbsp;Rive Bot</li>
          </ul>
        </div>

        <div className="nav-center">
          <img className="logo-img" src="/images/logo.png" alt="logo for dev 30 27" />
        </div>

        <div className="nav-right">
          <ul className='nav-ul-right'>
            <li><FaTwitter/>&nbsp;Twitter</li>
            <li><FaLinkedin/>&nbsp;Linked In</li>
            <li><FaBook/>&nbsp;Blog</li>
            <li><FaUserAlt/>&nbsp;Contact</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;