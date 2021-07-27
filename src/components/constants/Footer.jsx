import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__main">
          <h1 className="footer__h1">Developer3027</h1>
          <div className="footer__p">dev3027@mason-roberts.com</div>
        </div>
        <div className="footer__mid">
          <img className="footer__logo__img" src="/images/logo.png" alt='dev 30 27' />
        </div>

        <div className="footer__div">
          <ul>
            <a
              href='https://blog.mason-roberts.com'
              target='_blank'
              rel='noreferrer'>
              <li>Blog</li>
            </a>
            <Link to='/contact'>
              <li>Contact</li>
            </Link>
            <a
              href='/Mason+Roberts+Resume.pdf'
              target='_blank'
              rel='noopener'>
              <li>Resume</li>
            </a>
          </ul>
        </div>

        <div className="footer__div">
          <ul>
            <a
              href='https://www.linkedin.com/in/mason-roberts-3027/'
              target='_blank'
              rel='noreferrer'>
              <li>LinkedIn</li>
            </a>
            <a
              href='https://twitter.com/Developer3027'
              target='_blank'
              rel='noreferrer'>
              <li>Twitter</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
