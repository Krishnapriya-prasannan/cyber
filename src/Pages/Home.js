// src/Components/BeyondBio.js
import React from 'react';
import Navbar from '../Components/Nav';
import Hero from '../Components/Home/Hero';
import Results from '../Components/Home/Results';
import Ourservices from '../Components/Home/Ourservices';
import Expertise from '../Components/Home/Expertise';
import Testimonials from '../Components/Home/Testimonials';
import PricingSection from '../Components/Price';
import CyberThreatBanner from '../Components/Banner';
import Footer from '../Components/Footer';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Results />
      <Ourservices />
      <Expertise />
      <PricingSection />
      <CyberThreatBanner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
