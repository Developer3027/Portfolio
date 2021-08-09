import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/constants/Navbar';
import Hermit from './components/pages/hermit';
import Nutrasite from './components/pages/nutrasite';
import Hero from './components/pages/hero';
import ContactUs from './components/forms/contact';
import Footer from './components/constants/Footer';

import Projects from './components/pages/projects';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Route exact path='/' component={Hero} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/hermit-plus' component={Hermit} />
        <Route path='/nutrasite' component={Nutrasite} />
        <Route path='/projects' component={Projects} />
      </section>
      <Footer />
    </>
  );
}

export default App;
