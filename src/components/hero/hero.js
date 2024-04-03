// Navbar.js
import React from 'react';
import './hero.css'; // Import the CSS file
import BlueGeoImage from '../../assets/blue-geometric.png'

const Hero = () => {
    return (
      <div className="heroContainer">
          <div className ="geoImgContainer"><img src={BlueGeoImage} alt='blue geo' className='geoImg'></img></div>
          <div className='mainText'>
            <div className ="mainTextContainer1"><h2>Hello, I'm Dathan.</h2></div>
            <div className ="mainTextContainer2"><h2>I'm a high schooler who's into coding.</h2></div>
            <div className ="mainTextContainer3"><h2>I try to use coding to solve tasks.</h2></div>
          </div>
          <div className='navLinks'>
          <a href="https://github.com/Meiscool125">My Github</a>
          <a href="">About Me</a>
          <a href="">Projects</a>
          </div>
      </div>
    );
  };
  export default Hero;