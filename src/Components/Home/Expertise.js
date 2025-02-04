import { motion } from "framer-motion";
import comp2 from "../../assets/comp2.svg";
import icon1 from "../../assets/icon1.svg";
import icon5 from "../../assets/icon5.svg";

export default function Expertise() {
return (
    <section className="relative w-full py-32 bg-[#05030d]">
        <div className="container mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between md:gap-16 lg:gap-20">
            
            {/* Left Section - Image */}
            <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="md:w-1/2 mb-8 md:mb-0 flex justify-center"
            >
                    <div className="relative bg-[#0b0618] p-6 rounded-lg h-[450px] md:h-[550px] lg:h-[600px] w-full max-w-md lg:max-w-lg flex items-center justify-center overflow-hidden">
                            {/* Inner Glow Effect */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-purple-400 blur-3xl opacity-30" />
                            <img
                                    src={comp2}
                                    alt="Cyber Expertise"
                                    className="w-full h-auto max-h-full rounded-lg"
                            />
                    </div>
            </motion.div>

            {/* Right Section - Text and Icons */}
            <div className="md:w-1/2 flex flex-col items-start">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold text-white"
                >
                    With years of expertise in{" "}
                    <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-white bg-clip-text text-transparent">
                        cybersecurity
                    </span>
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mt-4 text-lg text-gray-300"
                >
                    Expertise certified professionals with deep industry knowledge.
                </motion.p>

                {/* Icon Sections */}
                <div className="mt-12 space-y-6">
                    {/* 24/7 Monitoring */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="flex items-center space-x-6"
                    >
                        <div className="bg-gradient-to-b from-violet-600 via-pink-300 to-white p-2 rounded-full">
                            <img
                                src={icon1}
                                alt="24/7 Monitoring"
                                className="w-12 h-12"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-white">24/7 Monitoring</h3>
                            <p className="text-gray-300">Around-the-clock vigilance to keep your business safe.</p>
                        </div>
                    </motion.div>

                    {/* Certified Professionals */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        className="flex items-center space-x-6"
                    >
                        <div className="bg-gradient-to-b from-violet-600 via-pink-300 to-white p-2 rounded-full">
                            <img
                                src={icon5}
                                alt="Certified Professionals"
                                className="w-12 h-12"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-white">Expertise</h3>
                            <p className="text-gray-300">Deep industry knowledge and expertise in cybersecurity.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);
}
