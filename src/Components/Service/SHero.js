import React from "react";
import { motion } from "framer-motion";
import service from "../../assets/service.svg";

const ServiceHero = () => {
  return (
    <section className="relative w-full h-screen bg-[#05030d] text-white flex flex-col items-center justify-center text-center px-8 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20"></div>

      {/* Content with Animation */}
      <motion.div
        className="relative z-10 max-w-[90%] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="border border-[#5b1166] px-4 py-2 text-md font-semibold text-white rounded-full hover:text-purple-500 transition">
          Advanced threat protection
        </span>
        <h1 className="mt-6 text-6xl md:text-7xl font-extrabold leading-tight tracking-wide mx-auto">
          Services that{" "}
          <span className="bg-gradient-to-b from-[#5b1166] via-[#9c42f5] to-[#d896ff] text-transparent bg-clip-text drop-shadow-lg">
            Secure
          </span>{" "}
          your digital assets
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-[90%] leading-tight tracking-wide mx-auto">
          Protect your business from sophisticated cyber threats with cutting-edge detection and response solutions.
        </p>
        <motion.button
          className="mt-6 px-6 py-3 text-lg font-semibold text-white transition border border-[#5b1166] rounded-full bg-gradient-to-r from-[#5b1166] to-[#d896ff] hover:from-[#4a0f55] hover:to-[#e6a8ff]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a free consultation
        </motion.button>
      </motion.div>

      {/* Image with Slide-Up Effect */}
      <motion.div
        className="relative mt-12 max-w-xl w-full flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        {/* Multi-layered glow effect */}
        <div className="absolute inset-0 w-full h-full rounded-full bg-purple-400 blur-3xl opacity-30"></div>

        <img src={service} alt="Security Service" className="relative w-full md:w-3/4" />
      </motion.div>
    </section>
  );
};

export default ServiceHero;
