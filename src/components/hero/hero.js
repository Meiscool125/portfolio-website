// Navbar.js
import React from 'react';
import './hero.css'; // Import the CSS file
import BlueGeoImage from '../../assets/blue-geometric.png'

const Hero = () => {
    return (
      <div className="heroContainer">
          <img src={BlueGeoImage} alt='blue geo' className='geoImg'></img>
      </div>
    );
  };
  
  export default Hero;