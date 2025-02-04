import React from 'react';
import Navbar from '../Components/Nav';
import ServiceHero from '../Components/Service/SHero';
import OurServices from '../Components/Service/OurService';
import PricingSection from '../Components/Service/Price';
const ServicePage = () => {
  return (
    <div>
        <Navbar />
       <ServiceHero />
       <OurServices />
       <PricingSection />
    </div>
      
  );
};

export default ServicePage;
