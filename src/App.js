import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav-bar/nav-bar';
import Hero from './components/hero/hero';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects-section/projects-section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
    </div>

  );
}

export default App;
