import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import comp1 from "../../assets/comp1.svg";

export default function ImpactfulResults() {
  // State for animated numbers
  const [counts, setCounts] = useState({ clients: 0, reach: 0, experts: 0, years: 0 });

  // Intersection observer hook
  const { ref, inView } = useInView({ triggerOnce: false });

  // Animate numbers when in view
  useEffect(() => {
    if (inView) {
      setCounts({ clients: 0, reach: 0, experts: 0, years: 0 }); // Reset numbers

      let start = 0;
      const duration = 2000; // Animation duration in ms
      const steps = 50; // Number of steps for smooth animation

      const incrementValues = {
        clients: 500 / steps,
        reach: 20 / steps,
        experts: 50 / steps,
        years: 10 / steps,
      };

      const interval = setInterval(() => {
        start++;
        setCounts(prevCounts => ({
          clients: Math.min(500, Math.floor(prevCounts.clients + incrementValues.clients)),
          reach: Math.min(20, Math.floor(prevCounts.reach + incrementValues.reach)),
          experts: Math.min(50, Math.floor(prevCounts.experts + incrementValues.experts)),
          years: Math.min(10, Math.floor(prevCounts.years + incrementValues.years)),
        }));

        if (start >= steps) clearInterval(interval);
      }, duration / steps);
    }
  }, [inView]); // Dependency ensures it re-runs when inView changes

  return (
    <section ref={ref} className="relative w-full py-28 bg-[#05030d]">
      <div className="container mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Heading at the Left Above Image */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            We have impactful{" "}
            <span className="bg-gradient-to-b from-violet-700 to-white bg-clip-text text-transparent">
              results
            </span>
          </motion.h2>

          {/* Left - Image with Glow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full flex justify-center"
          >
            <div className="absolute inset-0 w-full h-full rounded-full bg-purple-400 blur-3xl opacity-30"></div>
            <img src={comp1} alt="Cybersecurity Results" className="relative w-full max-w-lg md:max-w-xl" />
          </motion.div>
        </div>

        {/* Right - Text, Button & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 text-white flex flex-col justify-start"
        >
          {/* Text & Button at Top Right */}
          <div className="flex flex-col items-end">
            <p className="text-3xl md:text-3xl font-semibold text-right">
              Join the hundreds of businesses protected by{" "}
              <span className="text-purple-400">Cybersec.</span>
            </p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="mt-4 px-6 py-3 text-lg font-semibold border border-purple-500 text-purple-200 rounded-full hover:text-violet-500 transition"
            >
              Get started today
            </motion.button>
          </div>

          {/* Stats Section Below */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-10 grid grid-cols-2 md:grid-cols-2 gap-6 text-right"
          >
            {/* Stats */}
            <div className="text-white">
              <h3 className="text-6xl font-bold text-purple-400">{counts.clients}+</h3>
              <p className="text-lg text-gray-300">Clients Protected</p>
            </div>

            <div className="text-white">
              <h3 className="text-6xl font-bold text-purple-400">{counts.reach}+</h3>
              <p className="text-lg text-gray-300">Global Reach</p>
            </div>

            <div className="text-white">
              <h3 className="text-6xl font-bold text-purple-400">{counts.experts}+</h3>
              <p className="text-lg text-gray-300">Cybersecurity Experts</p>
            </div>

            <div className="text-white">
              <h3 className="text-6xl font-bold text-purple-400">{counts.years}+</h3>
              <p className="text-lg text-gray-300">Years of Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
