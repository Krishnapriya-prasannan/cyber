import React from "react";
import service from "../../assets/service.svg";

const ServiceHero = () => {
  return (
    <section className="relative bg-[#10002b] text-white flex flex-col items-center justify-center text-center py-20 px-4">
      {/* Background Binary Effect */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" ></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <span className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-full">
          Advanced threat protection
        </span>
        <h1 className="mt-6 text-6xl font-extrabold">
          Services that <span className="text-purple-400">Secure</span> your digital assets
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Protect your business from sophisticated cyber threats with cutting-edge detection and response solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold rounded-lg transition duration-300">
          Get a free consultation
        </button>
      </div>

      {/* Illustration */}
      <div className="relative mt-12 max-w-xl w-full flex justify-center">
        <img src={service} alt="Security Service" className="w-full md:w-3/4" />
      </div>
    </section>
  );
};

export default ServiceHero;
