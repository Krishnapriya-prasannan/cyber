import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#05030d] text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          
          {/* Cybersecurity Logo & Socials */}
          <div>
            <h2 className="text-2xl font-bold text-white">Cybersecurity</h2>
            <p className="mt-3 text-gray-400">Stay ahead of cyber threats.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition">
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a href="#" className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition">
                <FaInstagram className="text-white text-xl" />
              </a>
              <a href="#" className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition">
                <FaXTwitter className="text-white text-xl" />
              </a>
              <a href="#" className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 transition">
                <FaLinkedinIn className="text-white text-xl" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Pages</h3>
            <ul className="space-y-2">
              {["Home", "Home 2", "Case Study", "About", "Services", "Service Static", "Pricing", "Team", "Blog", "Contact"].map((page) => (
                <li key={page}>
                  <a href="#" className="hover:text-purple-400 transition">{page}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Utility</h3>
            <ul className="space-y-2">
              {["Style Guide", "Instructions", "Licenses", "Changelog", "Coming Soon", "Link in Bio", "Password Protected", "Error 404"].map((utility) => (
                <li key={utility}>
                  <a href="#" className="hover:text-purple-400 transition">{utility}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-400">hello@example.com</p>
            <p className="text-gray-400">106 Grant Ave, Logansport, IN 46947</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-l bg-gray-800 text-white focus:outline-none" />
                <button className="px-4 bg-purple-500 hover:bg-purple-600 transition text-white rounded-r">→</button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
          <p>© 2025 Designed by Webestica, Powered by Webflow</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <p className="hover:text-purple-400 cursor-pointer transition">Privacy Policy</p>
            <p className="hover:text-purple-400 cursor-pointer transition">Terms of Use</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
