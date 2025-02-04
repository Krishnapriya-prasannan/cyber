import { FaQuoteLeft } from "react-icons/fa";
import img1 from "../../assets/img.avif";
import img2 from "../../assets/img2.avif";
import img3 from "../../assets/img3.avif";
import img4 from "../../assets/img4.avif";
import React from "react";

const testimonials = [
  {
    image: img1,
    name: "John Doe",
    job: "Cybersecurity Expert",
    text: "This service has been a game-changer for our business security. Highly recommended!",
  },
  {
    image: img2,
    name: "Jane Smith",
    job: "IT Consultant",
    text: "A well-organized platform with top-notch security solutions. Couldn’t ask for more!",
  },
  {
    image: img3,
    name: "David Johnson",
    job: "Network Engineer",
    text: "The expertise and response time are unmatched. Best security team we’ve worked with!",
  },
  {
    image: img4,
    name: "Emily White",
    job: "Software Developer",
    text: "Absolutely love their services! The team ensures complete protection with ease.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-[#05030d] text-white">
      <div className="container mx-auto px-6 sm:px-12 text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          What our{" "}
          <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-white bg-clip-text text-transparent">
            clients
          </span>{" "}
          say
        </h2>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0b0618] p-8 rounded-2xl shadow-lg text-left flex flex-col justify-between border border-transparent hover:border-violet-400 hover:shadow-[0_0_20px_rgba(138,43,226,0.5)] transition-all duration-300 ease-in-out"
            >
              {/* Icon */}
              <FaQuoteLeft className="text-violet-400 text-5xl mb-6" />

              {/* Text */}
              <p className="text-gray-300 text-lg mb-8">{testimonial.text}</p>

              {/* Profile Section */}
              <div className="flex items-center gap-6 border-t border-gray-700 pt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-violet-500"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-lg text-gray-400">{testimonial.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
