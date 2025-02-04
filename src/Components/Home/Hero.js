import heroBg from "../../assets/hero.svg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#05030d] flex items-center">
      <div className="container mx-auto px-6 sm:px-12 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text */}
        <div className="max-w-xl text-white md:w-1/2 md:mr-24">
          <div className="inline-block px-4 py-2 text-l font-semibold border border-purple-500 text-perple-200 rounded-full hover:text-violet-500 transition">
            Your trusted cybersecurity partner
          </div>

          <h1 className="mt-6 text-4xl font-bold md:text-7xl">
            Safeguarding your digital <span className="bg-gradient-to-b from-violet-900 to-white bg-clip-text text-transparent">world</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-300">
            We provide advanced security solutions to safeguard your business from cyber threats.
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-6">
            <button className="px-6 py-2 text-lg font-semibold text-white transition border border-purple-500 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-50">
              Get a free consultation
            </button>
          </div>
        </div>

        {/* Right Section - Image with Glow Effect */}
        <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-purple-400 blur-3xl opacity-30"></div>
            {/* Cybersecurity Image */}
            <img src={heroBg} alt="Cybersecurity" className="relative w-full max-w-4xl md:max-w-9xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
