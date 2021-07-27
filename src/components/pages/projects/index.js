import React, { useState } from 'react';
import { FaFolder, FaFolderOpen, FaPlusSquare } from 'react-icons/fa';

import './styles.css';

const Projects = () => {
  const [nutraShow, setNutraShow] = useState(true);
  const [hermitShow, setHermitShow] = useState(true);
  const [katev2Show, setKatev2Show] = useState(true);
  const [showNutraInfo, setShowNutraInfo] = useState(false);
  const [showHermitInfo, setShowHermitInfo] = useState(false);
  const [showKatev2Info, setShowKatev2Info] = useState(false);

  return (
    <div className='container'>
      <div className='projectCard'>
        <div className='folderWrapper nutra'>
          <a
            className='regAnchor'
            href='https://github.com/Developer3027/ecom_mern'
            target='_blank'
            rel='noreferrer'>
            {nutraShow ? (
              <FaFolder
                onMouseEnter={() => setNutraShow(false)}
                className='icon'
              />
            ) : (
              <FaFolderOpen
                onMouseLeave={() => setNutraShow(true)}
                className='icon'
              />
            )}
          </a>
        </div>
        <div className='projectInfo'>
          <a
            className='regAnchor'
            href='https://nutrasite.vercel.app'
            target='_blank'
            rel='noreferrer'>
            <h2 className='title'>NutraSite</h2>
          </a>
          <p>
            Click the folder for the repo, the title for the site, and the plus
            for info.
          </p>
        </div>
        <div className='plusIcon'>
          <FaPlusSquare
            onClick={() => {
              setShowNutraInfo(!showNutraInfo);
            }}
          />
        </div>
      </div>
      <div id={showNutraInfo ? 'view' : 'hide'} className='projectDetails'>
        <p>
          Ecommerce app built in ReactJs. It uses NodeJs and Express for the
          server and MongoDb for database storage. I use JWT, Json Web Token to
          validate users. I use bcrypt to hash passwords for auth. It includes a
          admin dashboard where shop owners can add, edit and delete product, as
          well as view customers and orders. It features a review and rating
          system as well as a shopping cart.
        </p>
      </div>

      <div className='projectCard'>
        <div className='folderWrapper hermit'>
          <a
            className='regAnchor'
            href='https://github.com/Developer3027/hermit-plus'
            target='_blank'
            rel='noreferrer'>
            {hermitShow ? (
              <FaFolder
                onMouseEnter={() => setHermitShow(false)}
                className='icon'
              />
            ) : (
              <FaFolderOpen
                onMouseLeave={() => setHermitShow(true)}
                className='icon'
              />
            )}
          </a>
        </div>
        <div className='projectInfo'>
          <a
            className='regAnchor'
            href='https://hermit-plus.vercel.app'
            target='_blank'
            rel='noreferrer'>
            <h2 className='title'>Hermit Plus</h2>
          </a>
          <p>
            Click the folder for the repo, the title for the site, and the plus
            for info.
          </p>
        </div>
        <div className='plusIcon'>
          <FaPlusSquare
            onClick={() => {
              setShowHermitInfo(!showHermitInfo);
            }}
          />
        </div>
      </div>
      <div id={showHermitInfo ? 'view' : 'hide'} className='projectDetails'>
        <p>
          Movie app that brings all the hermits together. Frontend built in
          ReactJs. Backend uses Firebase for data storage, image storage, and
          auth. Users can register with email and password, login in with the
          same or log in with google.
        </p>
      </div>

      <div className='projectCard'>
        <div className='folderWrapper katev2'>
          <a
            className='regAnchor'
            href='https://github.com/Developer3027/Kate_v2'
            target='_blank'
            rel='noreferrer'>
            {katev2Show ? (
              <FaFolder
                onMouseEnter={() => setKatev2Show(false)}
                className='icon'
              />
            ) : (
              <FaFolderOpen
                onMouseLeave={() => setKatev2Show(true)}
                className='icon'
              />
            )}
          </a>
        </div>
        <div className='projectInfo'>
          <a
            className='regAnchor'
            href='https://kate-v2.vercel.app'
            target='_blank'
            rel='noreferrer'>
            <h2 className='title'>Kathryn Version 2</h2>
          </a>
          <p>
            Click the folder for the repo, the title for the site, and the plus
            for info.
          </p>
        </div>
        <div className='plusIcon'>
          <FaPlusSquare
            onClick={() => {
              setShowKatev2Info(!showKatev2Info);
            }}
          />
        </div>
      </div>
      <div id={showKatev2Info ? 'view' : 'hide'} className='projectDetails'>
        <p>
          Site is a static site built in HTML, CSS, and Javascript. The css
          originally used Bootstrap. Upon release of the site I found that it
          was heavy with unused css and javascript from Bootstrap. So I went
          through and kept the parts I used, which was a huge help. This was an
          initial redesign after launch for show if the client ran again.
        </p>
      </div>
    </div>
  );
};

export default Projects;
