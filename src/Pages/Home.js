// src/Components/BeyondBio.js
import React from 'react';
import Navbar from '../Components/Nav';
import Hero from '../Components/Home/Hero';
import Results from '../Components/Home/Results';
import Ourservices from '../Components/Home/Ourservices';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Results />
      <Ourservices />
    </div>
  );
};

export default HomePage;
