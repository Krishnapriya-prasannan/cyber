import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    title: "Small Businesses, Basic Security Needs",
    price: "$299",
    hours: "5 Hours",
    features: [
      "Threat monitoring",
      "Security updates",
      "Vulnerability check",
      "Firewall management",
      "SSL management",
      "Monthly report",
      "24/7 email support",
    ],
    borderColor: "border-gray-600",
    buttonStyle: "border border-purple-500 text-purple-400 hover:border-purple-400 hover:text-white",
  },
  {
    title: "Medium-Sized Businesses, Enhanced Security Needs",
    price: "$599",
    hours: "10 Hours",
    features: [
      "Incident response",
      "Comprehensive assessment",
      "Intrusion prevention",
      "Bi-weekly report",
    ],
    highlight: true,
    borderColor: "border-purple-500",
    buttonStyle: "bg-gradient-to-r from-purple-500 to-purple-300 text-white",
  },
  {
    title: "Large Enterprises, High-Security Demands",
    price: "$1,499",
    hours: "30 Hours",
    features: [
      "Proactive monitoring",
      "Custom security strategy",
      "Penetration testing",
      "Weekly report",
      "Dedicated support",
    ],
    borderColor: "border-gray-600",
    buttonStyle: "border border-purple-500 text-purple-400 hover:border-purple-400 hover:text-white",
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-[#05030d] text-white text-center">
      {/* Responsive Title with Animation */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Choose the{" "}
        <span className="text-purple-300">right plan</span> for your{" "}
        <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 text-transparent bg-clip-text">
          business
        </span>
      </motion.h1>

      {/* Pricing Cards Container */}
      <div className="flex flex-wrap justify-center gap-10 px-6 md:px-12 mt-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`flex flex-col justify-between p-12 rounded-xl bg-[#0b0618] w-[360px] sm:w-[400px] md:w-[440px] lg:w-[460px] min-h-[780px] relative transition-all duration-300 ease-out ${
              plan.highlight
                ? "border border-purple-500 shadow-xl shadow-purple-500/40"
                : `${plan.borderColor} hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/40`
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
          >
            {/* Hours & Price Alignment */}
            <div className="absolute top-6 left-6 flex flex-col items-start">
              <span className="px-5 py-2 text-base font-semibold bg-gray-800 text-white rounded-full">
                {plan.hours}
              </span>
              <div className="flex items-baseline space-x-3 mt-3">
                <h2 className={`text-6xl font-extrabold ${plan.highlight ? "text-purple-400" : ""}`}>
                  {plan.price}
                </h2>
                <span className="text-gray-400 text-lg self-end">/per website</span>
              </div>
            </div>

            {/* Plan Title */}
            <div className="mt-24 text-left">
              <p className="text-gray-300 text-2xl">{plan.title}</p>
            </div>

            {/* Features List */}
            <ul className="mt-10 space-y-4 text-left text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-lg">
                  <FaCheckCircle className="text-purple-400 mr-3 text-xl" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-auto w-full">
              <button
                className={`mt-12 py-4 rounded-full text-xl font-bold w-full transition-all duration-300 ${plan.buttonStyle}`}
              >
                Get started
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Responsive "All Plans" Text with Animation */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mt-16 mb-0 text-gray-300 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        All plans come with a{" "}
        <span className="text-purple-400 font-bold">14-day free trial</span> and{" "}
        <span className="text-purple-400 font-bold">no long-term contracts.</span>
      </motion.p>
    </section>
  );
};

export default PricingSection;
