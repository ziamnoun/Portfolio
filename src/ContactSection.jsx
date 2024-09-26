import React from 'react';
import { FaEnvelope, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const ContactSection = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.div style={fade} className="bg-gray-900  text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
            <form action="https://formspree.io/f/maylybbl" method="POST">
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="name">Name</label>
                <input
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <p className="text-lg mb-6">
              Feel free to reach out through any of the platforms below. I'll get back to you as soon as possible!
            </p>
            <div className="flex flex-col space-y-4">
              <a href="mailto:ziamziam05@gmail.com" className="flex items-center text-lg hover:text-blue-500 transition-colors duration-300">
                <FaEnvelope className="mr-4 text-2xl" />
                ziamziam05@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ziam-chowdhury-noun-2625582a3/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin className="mr-4 text-2xl" />
                Ziam Chowdhury Noun
              </a>
              <a href="https://www.facebook.com/zc.noun/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-500 transition-colors duration-300">
                <FaFacebook className="mr-4 text-2xl" />
                Ziam Chowdhury Noun
              </a>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ContactSection;
