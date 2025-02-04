import React from "react";
import service from "../../assets/service.svg";

const ServiceHero = () => {
  return (
    <section className="relative bg-[#10002b] text-white flex flex-col items-center justify-center text-center py-20 px-8 overflow-hidden w-full">
      {/* Background Binary Effect */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[90%] mx-auto">
        <span className=" border border-purple-500 px-8 py-2 text-md font-semibold text-white  rounded-full hover:text-violet-500 transition">
          Advanced threat protection
        </span>
        <h1 className="mt-6 text-6xl md:text-7xl font-extrabold leading-tight tracking-wide mx-auto">
          Services that <span className="text-purple-400">Secure</span> your digital assets
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-[90%] leading-tight tracking-wide mx-auto">
          Protect your business from sophisticated cyber threats with cutting-edge detection and response solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold rounded-full transition duration-300">
          Get a free consultation
        </button>
      </div>

      {/* Illustration with Purple Highlight Background */}
      <div className="relative mt-12 max-w-xl w-full flex justify-center">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-[80%] h-[80%] bg-purple-500 opacity-30 blur-2xl rounded-full"></div>
        <img src={service} alt="Security Service" className="relative w-full md:w-3/4" />
      </div>
    </section>
  );
};

export default ServiceHero;
