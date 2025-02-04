import React from 'react';
import grid from '../assets/grid.svg'; // Ensure the grid file is correct

const CyberThreatBanner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05030d] text-white ">
      <div className="relative rounded-2xl p-12 w-full max-w-5xl shadow-2xl overflow-hidden">
        
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${grid})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
          }}
        ></div>

        {/* Bright Smoky Glow Effect at Top Center */}
        <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-purple-500 opacity-50 blur-[120px]"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#150a30]/60 to-[#05030D] rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-6">
          <span className="inline-block bg-black text-sm text-white px-4 py-1 rounded-full border border-purple-400 shadow-md">
            Need Immediate Help?
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Stay ahead of cyber <span className="text-[#C678DD]">threats</span>
          </h1>
          <p className="text-lg text-gray-300">
            Download our comprehensive guide for free and start securing your data today.
          </p>
          <button className="px-8 py-4 text-lg border border-purple-400 text-white rounded-full hover:bg-purple-500 hover:border-purple-500 transition-all shadow-lg">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyberThreatBanner;
