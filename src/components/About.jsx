import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa"; // Import skill icons

import aboutImage from "../assets/aboutImage.jpg";
const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-[#1e0036] via-[#100020] to-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImage} // Image path
            alt="About Me"
            className="w-72 h-72 object-cover rounded-lg shadow-lg shadow-[#a855f7]"
          />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left px-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#d5a3ff] mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
          "Hi! I'm a passionate web developer with a background in teaching, now dedicated to building elegant and functional web experiences."
          </p>
          <p className="text-gray-300 leading-relaxed mt-3">
          "I specialize in React.js, Tailwind CSS, and modern frontend technologies, transforming ideas into dynamic and user-friendly applications. 
          Let’s collaborate to create something extraordinary! 🚀"
          </p>
        
          {/* Skills Section */}
            <div className="mt-6">
            <h3 className="text-2xl font-semibold text-[#d5a3ff] mb-3">Skills</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <FaHtml5 className="text-orange-500 text-4xl" />
              <FaCss3Alt className="text-blue-500 text-4xl" />
              <FaJs className="text-yellow-400 text-4xl" />
              <FaReact className="text-blue-400 text-4xl" />
              <FaPython className="text-blue-300 text-4xl" />
            </div>
          </div>
        </motion.div>
      
      </div>
    </section>
  );
};

export default About;

