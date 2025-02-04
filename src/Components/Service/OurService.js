import React from "react";
import { FaLock, FaPuzzlePiece, FaSync, FaShieldAlt, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Network Security",
    description: "Comprehensive solutions to protect your network infrastructure.",
    icon: <FaLock className="text-5xl text-white" />,
  },
  {
    title: "Penetration Testing",
    description: "Identify vulnerabilities before hackers do.",
    icon: <FaPuzzlePiece className="text-5xl text-white" />,
  },
  {
    title: "Incident Response",
    description: "Rapid response to contain and mitigate cyber incidents.",
    icon: <FaSync className="text-5xl text-white" />,
  },
  {
    title: "Vulnerability Assessment",
    description: "Identify and evaluate security weaknesses to prevent exploitation.",
    icon: <FaShieldAlt className="text-5xl text-white" />,
  },
  {
    title: "Threat Detection & Response",
    description: "Monitor and respond to security threats in real-time.",
    icon: <FaExclamationTriangle className="text-5xl text-white" />,
  },
  {
    title: "Compliance & Risk Management",
    description: "Ensure regulatory compliance while managing security risks effectively.",
    icon: <FaCheckCircle className="text-5xl text-white" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#05030d] text-white text-center">
      <h1 className="text-6xl md:text-7xl font-extrabold mb-8">
        Our <span className="text-purple-400">Services</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
        A well-organized website with a professional look. It offers detailed service descriptions, case studies, and easy navigation.
      </p>

      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col justify-between p-8 rounded-xl bg-[#0b0618] w-[380px] h-[400px] sm:w-[400px] sm:h-[420px] md:w-[420px] md:h-[430px] relative transition-all duration-300 ease-out hover:ease-in hover:duration-200 hover:border hover:border-purple-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-500/40"
          >
            <div className="absolute top-6 left-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#5b1166] to-purple-200">
              {service.icon}
            </div>
            <div className="mt-auto">
              <h3 className="text-white text-2xl font-bold">{service.title}</h3>
              <p className="text-gray-300 text-base mt-3">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
