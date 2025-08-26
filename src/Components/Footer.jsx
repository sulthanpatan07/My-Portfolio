import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Simple copyright / credit line */}
        <p className="text-gray-400 mb-4">
          Designed & Developed by Sulthan Patan
        </p>

        {/* Social links with icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/sulthanpatan07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sulthan-patan-baba5b2b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sulthanpatan786@gmail.com"

            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
