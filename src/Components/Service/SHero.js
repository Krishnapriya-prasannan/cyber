import React from "react";
import { motion } from "framer-motion";
import service from "../../assets/service.svg";

const ServiceHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#05030d] text-white flex flex-col items-center justify-center text-center px-6 sm:px-8 pt-24 pb-24 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20"></div>

      {/* Content with Animation */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Badge Text */}
        <span className="border border-[#5b1166] px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-md font-semibold text-white rounded-full hover:text-purple-500 transition">
          Advanced threat protection
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide mx-auto">
          Services that{" "}
          <span className="bg-gradient-to-b from-[#5b1166] via-[#9c42f5] to-[#d896ff] text-transparent bg-clip-text drop-shadow-lg">
            Secure
          </span>{" "}
          your digital assets
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-[90%] leading-relaxed mx-auto">
          Protect your business from sophisticated cyber threats with cutting-edge detection and response solutions.
        </p>

        {/* Button */}
        <motion.button
          className="mt-6 px-5 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white transition border border-[#5b1166] rounded-full bg-gradient-to-r from-[#5b1166] to-[#d896ff] hover:from-[#4a0f55] hover:to-[#e6a8ff]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a free consultation
        </motion.button>
      </motion.div>

      {/* Image with Slide-Up Effect */}
      <motion.div
        className="relative mt-10 sm:mt-12 w-full max-w-xs sm:max-w-md md:max-w-lg flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        {/* Multi-layered glow effect */}
        <div className="absolute inset-0 w-full h-full rounded-full bg-purple-400 blur-3xl opacity-30"></div>

        <img src={service} alt="Security Service" className="relative w-3/4 sm:w-full md:w-3/4" />
      </motion.div>
    </section>
  );
};

export default ServiceHero;
