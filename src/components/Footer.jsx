import React from 'react';

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amna-nazim-312987332/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="amnanazym1@gmail.com"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
  onClick={scrollToTop}
  className="absolute right-6 bottom-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition"
>
  <FaArrowUp className="text-xl" />
</button>
    </footer>
  );
};

export default Footer;
