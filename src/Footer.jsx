import React from 'react';
import { FaEnvelope, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p className="text-lg text-center sm:text-left">&copy; 2024 Ziam Chowdhury Noun. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center sm:justify-end">
          <a
            href="mailto:ziamziam05@gmail.com"
            className="text-lg mx-2 hover:text-blue-500 transition-colors duration-300"
          >
            <FaEnvelope className="text-2xl inline-block" />
          </a>
          <a
            href="https://www.linkedin.com/in/ziam-chowdhury-noun-2625582a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg mx-2 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl inline-block" />
          </a>
          <a
            href="https://www.facebook.com/zc.noun/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg mx-2 hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook className="text-2xl inline-block" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
