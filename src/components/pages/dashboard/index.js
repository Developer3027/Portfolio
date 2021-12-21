import React, { useState } from 'react';
/*import { Link } from 'react-router-dom';*/
import './style/dash.style.css';

const Dashboard = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showBlogInfo, setShowBlogInfo] = useState(false);
  const [showLessons, setShowLessons] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const HideInfo = () => {
    setShowIntro(false);
    setShowBlogInfo(false);
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='leftNav'>
          <button
            className='dashBtn blogYellow'
            onClick={() => {
              HideInfo();
              setShowBlogInfo(true);
            }}>
            <span>Blog</span>
          </button>
          <button className='dashBtn aboutGreen'>
            <span>About</span>
          </button>
          <button className='dashBtn resRed'>
            <span>Resources</span>
          </button>
          {/* School Section */}
          <button
            className='dashBtn eduPurple'
            onClick={() => {
              setShowLessons(!showLessons);
            }}>
            <span>Erudition {'>>'}</span>
          </button>
          <button
            id={showLessons ? 'view' : 'hide'}
            className='dashBtn indent subEduPurple'>
            <span>AWS SAA-CO2 notes</span>
          </button>
          <button
            id={showLessons ? 'view' : 'hide'}
            className='dashBtn indent subEduPurple'>
            <span>AWS SAA-CO2 test</span>
          </button>
          <button
            id={showLessons ? 'view' : 'hide'}
            className='dashBtn indent subEduPurple'>
            <span>AWS dev notes</span>
          </button>
          <button
            id={showLessons ? 'view' : 'hide'}
            className='dashBtn indent subEduPurple'>
            <span>AWS dev test</span>
          </button>
          <button
            id={showLessons ? 'view' : 'hide'}
            className='dashBtn indent subEduPurple'>
            <span>ReactJs</span>
          </button>
          <button
            id={showLessons ? 'view' : 'hide'}
            className='dashBtn indent subEduPurple'>
            <span>Web Dev Full Stack</span>
          </button>
          {/* Projects Section */}
          <button
            onClick={() => {
              setShowProjects(!showProjects);
            }}
            className='dashBtn coral'>
            <span>Projects {'>>'}</span>
          </button>
          <button
            id={showProjects ? 'view' : 'hide'}
            onClick={() => {
              setShowIntro(false);
            }}
            className='dashBtn indent metalBlue'>
            <span>Swabbie</span>
          </button>
          <button
            id={showProjects ? 'view' : 'hide'}
            className='dashBtn indent hermitGreen'>
            <span>Hermits</span>
          </button>
          <button
            id={showProjects ? 'view' : 'hide'}
            className='dashBtn indent DevTubeOrange'>
            <span>DevTube</span>
          </button>
          <button
            id={showProjects ? 'view' : 'hide'}
            className='dashBtn indent goodNeighborTeal'>
            <span>My Recipe</span>
          </button>
          <button
            id={showProjects ? 'view' : 'hide'}
            className='dashBtn indent musicPink'>
            <span>My Music</span>
          </button>
        </div>
        <div className='rightNav'>
          <div
            id={showIntro ? 'view' : 'hide' && 'noDisplay'}
            className='intro'>
            <h3>Welcome</h3>
            <p>
              I created this dashboard for both of us. I wanted an organized
              place where I could quickly get to my projects as well as to
              information and tools I use when designing or coding.
            </p>
            &nbsp;
            <p>
              To the left you will find various buttons that will present more
              information. It works much like a standard file tree that you are
              used to. Some buttons expand to offer more options. Others just
              present information. Information may include links that leave this
              site.
            </p>
            &nbsp;
            <p>
              If you want to see some of my work, open the Projects section.
              Some projects may be under construction. If you are wanting to
              learn about AWS or Web Dev, open the Erudition section. The
              resources button gives information about many of the tools and
              resources I use often.
            </p>
            &nbsp;
            <p>
              If you like what I am doing and enjoy any of the things I offer,
              find anything useful, helpful, enjoyable, or worthy, then I
              encourage you to stop by the store. Any gratitude would be greatly
              appreciated.
            </p>
          </div>
          <div id={showBlogInfo ? 'view' : 'hide'} className='blogInfo'>
            <h3>Blog</h3>
            <p>
              Blog, is a blog, is a blog, right? Here you will find posts I have
              written about AWS and Full Stack Web Development. Built with
              NextJs with a GraphCMS backend. This is{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
