import React from 'react';
import Navbar from '../Components/Nav';
import ServiceHero from '../Components/Service/SHero';
import OurServices from '../Components/Service/OurService';
import PricingSection from '../Components/Price';
import CyberThreatBanner from '../Components/Banner';
import Footer from '../Components/Footer';
const ServicePage = () => {
  return (
    <div>
        <Navbar />
       <ServiceHero />
       <OurServices />
       <PricingSection />
       <CyberThreatBanner />
       <Footer/>
    </div>
      
  );
};

export default ServicePage;
