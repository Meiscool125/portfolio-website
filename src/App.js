import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav-bar/nav-bar';
import Hero from './components/hero/hero';
import AboutMe from './components/aboutMe/aboutMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
    </div>

  );
}

export default App;
