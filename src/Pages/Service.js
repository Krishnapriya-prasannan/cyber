import React from 'react';
import Navbar from '../Components/Nav';
import ServiceHero from '../Components/Service/SHero';
import OurServices from '../Components/Service/OurService';
const ServicePage = () => {
  return (
    <div>
        <Navbar />
       <ServiceHero />
       <OurServices />
    </div>
      
  );
};

export default ServicePage;
