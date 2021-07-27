import React from 'react';
import hermitScreenshot from '../../../images/hermit-screenshot.png';
import './styles.css';

const Hermit = () => {
  return (
    <>
      <section className='hermit__container'>
        <div className='hermit__wrapper'>
          <h2>Hermit Plus</h2>&nbsp;
          <h3>Under Construction</h3>
          <div className='hermit__screenshot'>
            <img src={hermitScreenshot} alt='design of app' />
          </div>
          <h4>
            <a
              href='https://www.figma.com/file/1rA5nLglFEz6F1453wKwkG/Hermit-Plus?node-id=0%3A1'
              target='_blank'
              rel='noreferrer'
              className='hermit__highlight'>
              Figma File
            </a>
          </h4>
          <p>
            This is a link to the Figma file for the current design concept of
            the app.
          </p>
          &nbsp;
          <h4>
            <a
              href='https://hermit-plus.vercel.app'
              target='_blank'
              rel='noreferrer'
              className='hermit__highlight'>
              Mobile version of landing page
            </a>
          </h4>
          <p>
            The app is deployed to Vercel. Currently the landing page is for
            mobile only. View on phone or screen lesser than 425px.
          </p>
          &nbsp;
          <p>
            I love Minecraft. I love the group of youtube content providers that
            make up Hermitcraft. If you are not familiar with either, that is
            ok, this concept has far reaching potential, but for this project,
            it may be better to explain the game and the characters.
          </p>
          &nbsp;
          <p>
            Minecraft is a cross platform game, created in java, that is really
            nothing more than block manipulation. You are presented a world
            created by blocks. The trees, dirt, stone, air, water, everything is
            a block, and nearly every block can be mined, and used in some
            combination to create different blocks to create whatever your
            imagination will let you.
          </p>
          &nbsp;
          <p>
            The hermits of Hermitcraft are a group of guys and gals that play
            Minecraft, interact with each other, and create amazing builds.
            After a season of play, that world they created is available for
            anyone to play on.
          </p>
          &nbsp;
          <p>
            One of the many things I love about the hermits is looking at the
            way they interact from the perspectives. They each have their own
            unique way of looking at the same point of view. This is where
            hermit plus comes in.
          </p>
          &nbsp;
          <p>
            I find it difficult to fully enjoy the hermits having to switch back
            and forth in channels. Hunting for or trying to remember all the
            hermits that may have been in a scene to see how the story or plot
            is growing, or alliances are being made. Keeping track of amazing
            builds and nuggets to hunt for when the season is over.
          </p>
          &nbsp;
          <p>
            With Hermit Plus all the hermits are in one place. Think Disney + or
            Netflix for hermits. Each video introduction screen lists all the
            hermits that interacted in that video. If made available, you can
            find the music featured in the video. Through the app you can find
            information about the hermits themselves. But best of all, with all
            the hermits in one place they are easy to follow.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hermit;
