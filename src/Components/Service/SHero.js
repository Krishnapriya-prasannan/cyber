import React from "react";

const ServiceHero = () => {
  return (
    <section className="relative bg-[#0a0214] text-white flex flex-col items-center justify-center text-center py-20 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/assets/sp.svg')" }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <span className="px-4 py-1 text-sm font-semibold text-white bg-purple-600 rounded-full">Advanced threat protection</span>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold">
          Services that <span className="text-purple-400">Secure</span> your digital assets
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Protect your business from sophisticated cyber threats with cutting-edge detection and response solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition duration-300">
          Get a free consultation
        </button>
      </div>
      
      {/* Illustration */}
      <div className="relative mt-12 max-w-xl w-full flex justify-center">
        <img src="/assets/service.svg" alt="Security Service" className="w-full md:w-3/4" />
      </div>
    </section>
  );
};

export default ServiceHero;
