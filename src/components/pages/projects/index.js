import React, { useState } from 'react';
import { FaFolder, FaFolderOpen, FaPlusSquare } from 'react-icons/fa';

import './styles.css';

const Projects = () => {
  const [nutraShow, setNutraShow] = useState(true);
  const [hermitShow, setHermitShow] = useState(true);
  const [katev1Show, setKatev1Show] = useState(true);
  const [katev2Show, setKatev2Show] = useState(true);
  const [copyShow, setCopyShow] = useState(true);
  const [musicShow, setMusicShow] = useState(true);
  const [landingShow, setLandingShow] = useState(true);
  const [recipeShow, setRecipeShow] = useState(true);
  const [barberShow, setBarberShow] = useState(true);

  const [showNutraInfo, setShowNutraInfo] = useState(false);
  const [showHermitInfo, setShowHermitInfo] = useState(false);
  const [showKatev1Info, setShowKatev1Info] = useState(false);
  const [showKatev2Info, setShowKatev2Info] = useState(false);
  const [showCopyInfo, setShowCopyInfo] = useState(false);
  const [showMusicInfo, setShowMusicInfo] = useState(false);
  const [showLandingInfo, setShowLandingInfo] = useState(false);
  const [showRecipeInfo, setShowRecipeInfo] = useState(false);
  const [showBarberInfo, setShowBarberInfo] = useState(false);

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
        <div className='folderWrapper katev1'>
          <a
            className='regAnchor'
            href='https://github.com/Developer3027/kathrynroberts-sc48'
            target='_blank'
            rel='noreferrer'>
            {katev1Show ? (
              <FaFolder
                onMouseEnter={() => setKatev1Show(false)}
                className='icon'
              />
            ) : (
              <FaFolderOpen
                onMouseLeave={() => setKatev1Show(true)}
                className='icon'
              />
            )}
          </a>
        </div>
        <div className='projectInfo'>
          <a
            className='regAnchor'
            href='https://kathrynroberts.vercel.app'
            target='_blank'
            rel='noreferrer'>
            <h2 className='title'>Kathryn Roberts SC-48</h2>
          </a>
          <p>
            Click the folder for the repo, the title for the site, and the plus
            for info.
          </p>
        </div>
        <div className='plusIcon'>
          <FaPlusSquare
            onClick={() => {
              setShowKatev1Info(!showKatev1Info);
            }}
          />
        </div>
      </div>
      <div id={showKatev1Info ? 'view' : 'hide'} className='projectDetails'>
        <p>
          Site is a static site built in HTML, CSS, and Javascript. Kate had
          decided to do her part for change after getting frustrated at those
          who are elected were falling short. The rank ignorance of elected
          leaders who had obvious political agendas and cared nothing for the
          people, had grated her last nerve.
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

      <div className='projectCard'>
        <div className='folderWrapper copy'>
          <a
            className='regAnchor'
            href='https://www.figma.com/file/BpH5fAxV5C06TYwTqBGxHB/Lisa-Benks?node-id=0%3A1'
            target='_blank'
            rel='noreferrer'>
            {copyShow ? (
              <FaFolder
                onMouseEnter={() => setCopyShow(false)}
                className='icon'
              />
            ) : (
              <FaFolderOpen
                onMouseLeave={() => setCopyShow(true)}
                className='icon'
              />
            )}
          </a>
        </div>
        <div className='projectInfo'>
          <a
            className='regAnchor'
            href='https://elementor.mason-roberts.com'
            target='_blank'
            rel='noreferrer'>
            <h2 className='title'>Copy Writer</h2>
          </a>
          <p>
            Click the folder for the Figma file, the title for the site, and the
            plus for info.
          </p>
        </div>
        <div className='plusIcon'>
          <FaPlusSquare
            onClick={() => {
              setShowCopyInfo(!showCopyInfo);
            }}
          />
        </div>
      </div>
      <div id={showCopyInfo ? 'view' : 'hide'} className='projectDetails'>
        <p>
          This is a wordpress site, built in place on my site, so no code repo.
          Built with Elementor and designed by me. This idea sprang from UpWork.
          I was searching for work and ran across a copy writer looking for
          someone to build a site. So I took a shot at designing and building in
          Elementor. I like how it came out. It was never presented to a client.
        </p>
      </div>

      <div className='projectCard'>
        <div className='folderWrapper music'>
          <a
            className='regAnchor'
            href='https://github.com/Developer3027/hero-video'
            target='_blank'
            rel='noreferrer'>
            {musicShow ? (
              <FaFolder
                onMouseEnter={() => setMusicShow(false)}
                className='icon'
              />
            ) : (
              <FaFolderOpen
                onMouseLeave={() => setMusicShow(true)}
                className='icon'
              />
            )}
          </a>
        </div>
        <div className='projectInfo'>
          <a
            className='regAnchor'
            href='https://cocky-cori-7cae1e.netlify.app'
            target='_blank'
            rel='noreferrer'>
            <h2 className='title'>Music Found</h2>
          </a>
          <p>
            Click the folder for the repo, the title for the site, and the plus
            for info.
          </p>
        </div>
        <div className='plusIcon'>
          <FaPlusSquare
            onClick={() => {
              setShowMusicInfo(!showMusicInfo);
            }}
          />
        </div>
      </div>
      <div id={showMusicInfo ? 'view' : 'hide'} className='projectDetails'>
        <p>
          This is a HTML, CSS, and Javascript project that is in progress.
          Eventually I will make this a subscription service that provides
          digital music with that vinyl feel. This introduced me to the
          wonderful world of web audio. If it does not play, click the yellow
          reset button.
        </p>
      </div>

      <div className='projectCard'>
        <div className='folderWrapper landing'>
          <span>
            {landingShow ? (
              <FaFolder
                onMouseEnter={() => setLandingShow(false)}
                className='icon'
              />
            ) : (
              <FaFolderOpen
                onMouseLeave={() => setLandingShow(true)}
                className='icon'
              />
            )}
          </span>
        </div>
        <div className='projectInfo'>
          <a
            className='regAnchor'
            href='https://landing-coupon.mason-roberts.com'
            target='_blank'
            rel='noreferrer'>
            <h2 className='title'>Landing Page</h2>
          </a>
          <p>
            No code for the repo, the title for the site, and the plus for info.
          </p>
        </div>
        <div className='plusIcon'>
          <FaPlusSquare
            onClick={() => {
              setShowLandingInfo(!showLandingInfo);
            }}
          />
        </div>
      </div>
      <div id={showLandingInfo ? 'view' : 'hide'} className='projectDetails'>
        <p>
          This is a wordpress project set up and built on my site, so no code
          repo. I love the design of this site
        </p>
      </div>

      <div className='projectCard'>
        <div className='folderWrapper recipe'>
          <a
            className='regAnchor'
            href='https://www.figma.com/file/NwojxBaygU87gM0OlLi6wa/Recipe-Book'
            target='_blank'
            rel='noreferrer'>
            {recipeShow ? (
              <FaFolder
                onMouseEnter={() => setRecipeShow(false)}
                className='icon'
              />
            ) : (
              <FaFolderOpen
                onMouseLeave={() => setRecipeShow(true)}
                className='icon'
              />
            )}
          </a>
        </div>
        <div className='projectInfo'>
          <span>
            <h2 className='title'>Recipe Book Design</h2>
          </span>
          <p>
            Click on the folder to view Figma file, No site built yet, and the
            plus for info.
          </p>
        </div>
        <div className='plusIcon'>
          <FaPlusSquare
            onClick={() => {
              setShowRecipeInfo(!showRecipeInfo);
            }}
          />
        </div>
      </div>
      <div id={showRecipeInfo ? 'view' : 'hide'} className='projectDetails'>
        <p>
          This is a design I had been working on for a recipe book style web
          app. I really like the way this is coming along and am excited to
          continue work on it.
        </p>
      </div>

      <div className='projectCard'>
        <div className='folderWrapper barber'>
          <span>
            {barberShow ? (
              <FaFolder
                onMouseEnter={() => setBarberShow(false)}
                className='icon'
              />
            ) : (
              <FaFolderOpen
                onMouseLeave={() => setBarberShow(true)}
                className='icon'
              />
            )}
          </span>
        </div>
        <div className='projectInfo'>
          <a
            className='regAnchor'
            href='https://barber-shop.mason-roberts.com'
            target='_blank'
            rel='noreferrer'>
            <h2 className='title'>The Barber Shop</h2>
          </a>
          <p>
            No code repo, No design file, Click the title for site and plus for
            info.
          </p>
        </div>
        <div className='plusIcon'>
          <FaPlusSquare
            onClick={() => {
              setShowBarberInfo(!showBarberInfo);
            }}
          />
        </div>
      </div>
      <div id={showBarberInfo ? 'view' : 'hide'} className='projectDetails'>
        <p>
          This is a wordpress site built on my site so no code repo. I love the
          design of this site and have plans to remake this in react or vue with
          either a node or firebase backend. The original design was found on
          dribbble and I made a few changes. Built with Elementor.
        </p>
      </div>
    </div>
  );
};

export default Projects;
