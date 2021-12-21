import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Hero() {
  return (
    <div className='hero__container'>
      <div className='hero__wrapper'>
        <div className='hero__leftEdge'>
          <p>Mason Roberts</p>
        </div>
        <div className='hero__outer'>
          <div className='hero__inner'>
            <div>
              <p className='hero__name__mobile'>Developer3027</p>
              <p className='hero__top'>
                A <span className='hero__hl'>digital designer</span> and{' '}
                <span className='hero__hl'>frontend developer</span> living in
                the Carolinas, United States.
              </p>
            </div>
            <div>
              <p className='hero__mid'>
                If you would like to know more about me, or are interested in my
                work, you can contact me at{' '}
                <span className='hero--hl'>dev3027@mason-roberts.com</span>
              </p>
            </div>
          </div>

          <div className='hero__btns'>
            <Link className='hero__link' to='/dash'>
              <div className='hero__btnsOne'>
                <p>Enter</p>
              </div>
            </Link>
            <Link className='hero__link' to='/contact'>
              <div className='hero__btnsTwo'>
                <p>Contact Me</p>
              </div>
            </Link>
          </div>

          <div className='hero__title'>
            <p className='hero__text'>Developer3027</p>
          </div>
        </div>

        <div className='hero__pic'>
          <img
            className='hero__img'
            src='/images/mason_roberts.png'
            alt='yep'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
