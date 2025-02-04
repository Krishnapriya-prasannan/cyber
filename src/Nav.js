import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // Import for animation
import hexLogo from "./assets/hex.svg";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0a0718] text-white px-6 sm:px-12 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2 ml-4">
        <img src={hexLogo} alt="Logo" className="w-42 h-30" /> {/* Increased size */}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-lg font-semibold flex-grow justify-center">
        <a href="#" className="text-white hover:text-blue-900 transition">
          Home
        </a>
        <a href="#" className="text-white hover:text-blue-900 transition">
          About
        </a>

        {/* Dropdown Menu with Animation */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}  // Open dropdown on hover
          onMouseLeave={() => setDropdownOpen(false)} // Close dropdown on mouse leave
        >
          <button className="flex items-center text-white hover:text-violet-400 transition">
            Pages <FaChevronDown className="ml-1 text-sm" />
          </button>

          {/* Animated Dropdown */}
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 mt-2 w-40 bg-[#1a132b] shadow-md rounded-md"
            >
              <a href="#" className="block px-4 py-2 text-white hover:text-violet-400 transition">
                Page 1
              </a>
              <a href="#" className="block px-4 py-2 text-white hover:text-violet-400 transition">
                Page 2
              </a>
            </motion.div>
          )}
        </div>

        <a href="#" className="text-white hover:text-blue-900 transition">
          Services
        </a>
      </div>

      {/* Contact Button */}
      <a
        href="#"
        className="hidden md:block border border-purple-500 text-white px-6 py-2 rounded-full hover:text-violet-500 transition"
      >
        Contact
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 text-2xl"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1a132b] text-white shadow-md md:hidden">
          <a href="#" className="block px-6 py-3 text-white hover:text-blue-900 transition">
            Home
          </a>
          <a href="#" className="block px-6 py-3 text-white hover:text-blue-900 transition">
            About
          </a>

          {/* Mobile Dropdown for Pages */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}  // Open dropdown on hover
            onMouseLeave={() => setDropdownOpen(false)} // Close dropdown on mouse leave
          >
            <button className="w-full text-left px-6 py-3 flex justify-between items-center text-white hover:text-violet-400 transition">
              Pages <FaChevronDown className="ml-1 text-sm" />
            </button>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#27203d]"
              >
                <a href="#" className="block px-6 py-2 text-white hover:text-violet-400 transition">
                  Page 1
                </a>
                <a href="#" className="block px-6 py-2 text-white hover:text-violet-400 transition">
                  Page 2
                </a>
              </motion.div>
            )}
          </div>

          <a href="#" className="block px-6 py-3 text-white hover:text-blue-900 transition">
            Services
          </a>
          <a href="#" className="block px-6 py-3 text-white hover:text-violet-500 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
