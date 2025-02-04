import { motion } from "framer-motion";
import { FaShieldAlt, FaBug, FaExclamationTriangle } from "react-icons/fa";

export default function OurServices() {
  return (
    <section className="relative w-full py-24 bg-[#05030d]">
      <div className="container mx-auto px-6 sm:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-white bg-clip-text text-transparent">
            services
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          A well-organized website with a professional look. It offers detailed service
          descriptions, case studies, and easy navigation.
        </motion.p>

        {/* Service Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1: Network Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="bg-[#0b0618] p-8 h-80 rounded-2xl shadow-lg text-left flex flex-col justify-between border-2 border-transparent hover:border-violet-400 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-all duration-300 ease-in-out"
          >
            <FaShieldAlt className="text-violet-400 text-5xl" />
            <h3 className="text-3xl font-semibold text-white mt-8">Network Security</h3>
            <p className="text-gray-300 mt-2 text-lg">
              Comprehensive solutions to protect your network infrastructure.
            </p>
          </motion.div>

          {/* Card 2: Penetration Testing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="bg-[#0b0618] p-8 h-80 rounded-2xl shadow-lg text-left flex flex-col justify-between border-2 border-transparent hover:border-violet-400 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-all duration-300 ease-in-out"
          >
            <FaBug className="text-violet-400 text-5xl" />
            <h3 className="text-3xl font-semibold text-white mt-8">Penetration Testing</h3>
            <p className="text-gray-300 mt-2 text-lg">
              Identify vulnerabilities before hackers do.
            </p>
          </motion.div>

          {/* Card 3: Incident Response */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="bg-[#0b0618] p-8 h-80 rounded-2xl shadow-lg text-left flex flex-col justify-between border-2 border-transparent hover:border-violet-400 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-all duration-300 ease-in-out"
          >
            <FaExclamationTriangle className="text-violet-400 text-5xl" />
            <h3 className="text-3xl font-semibold text-white mt-8">Incident Response</h3>
            <p className="text-gray-300 mt-2 text-lg">
              Rapid response to contain and mitigate cyber incidents.
            </p>
          </motion.div>
        </div>

        {/* Buttons at Bottom Center */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-violet-700 via-violet-500 to-white text-black rounded-full shadow-lg"
          >
            Get in Touch
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="inline-block px-8 py-4 text-lg font-semibold border border-purple-500 text-purple-200 rounded-full hover:text-violet-500 transition"
          >
            Browse All Services
          </motion.button>
        </div>
      </div>
    </section>
  );
}
