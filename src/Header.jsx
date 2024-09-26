import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative bg-gray-900 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/3BfHL5P/cubed-squares-black-3d-bqeujlzpj3p2e505.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center h-full">
        <div className="lg:w-1/2 order-last lg:order-first flex justify-center items-center h-full p-8 lg:p-24">
          <img src="https://i.ibb.co/4fNPBzz/IMG-20221118-WA0005-01-removebg-preview-1.png" alt="Profile" className="w-full h-full max-w-md lg:max-w-full lg:h-auto rounded-lg border-4 border-white shadow-lg animate-fade-in-down"/>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center text-center items-center lg:items-start p-8 lg:p-24">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-down">Hi there, I'm Ziam Chowdhury Noun!</h1>
          <p className="text-lg lg:text-xl mb-8 drop-shadow-lg animate-fade-in-up">Web Developer</p>
          <nav className="flex gap-2 flex-col lg:flex-row lg:justify-start lg:space-x-4">
            <Link to="/About" className="px-6 py-2 btn border-1 border-white bg-red-600 text-white rounded-full hover:bg-red-700 transition animate-fade-in-down lg:mr-4">About and Skills</Link>
            <Link to="/Projects" className="px-6 py-2 btn border-1 border-white bg-red-600 text-white rounded-full hover:bg-red-700 transition animate-fade-in-down lg:mr-4">Projects</Link>
            <Link to="/ContactSection" className="px-6 py-2 btn border-1 border-white bg-red-600 text-white rounded-full hover:bg-red-700 transition animate-fade-in-down lg:mr-4">Contact</Link>
            <Link to="/Education" className="px-6 py-2 btn border-1 border-white bg-red-600 text-white rounded-full hover:bg-red-700 transition animate-fade-in-down lg:mr-4">Education</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

