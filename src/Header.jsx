import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-gray-900 text-white h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/3BfHL5P/cubed-squares-black-3d-bqeujlzpj3p2e505.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center h-full">
        <div className="lg:w-1/2 order-last lg:order-first flex justify-center items-center h-full p-8 lg:p-24">
          <img src="https://i.ibb.co/4fNPBzz/IMG-20221118-WA0005-01-removebg-preview-1.png" alt="Profile" className="w-full h-full max-w-md lg:max-w-full lg:h-auto rounded-lg border-4 border-white shadow-lg animate-fade-in-down"/>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center text-center items-center lg:items-start p-8 lg:p-24">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-down">My Portfolio</h1>
          <p className="text-xl mb-8 drop-shadow-lg animate-fade-in-up">Web Developer</p>
          <nav className="flex space-x-4">
            <a href="#about" className="px-6 py-2 btn border-1 border-white bg-red-600 text-white rounded-full hover:bg-red-700 transition animate-fade-in-down">About</a>
            <a href="#projects" className="px-6 py-2 btn border-1 border-white bg-red-600 text-white rounded-full hover:bg-red-700 transition animate-fade-in-down">Projects</a>
            <a href="#contact" className="px-6 py-2 btn border-1 border-white bg-red-600 text-white rounded-full hover:bg-red-700 transition animate-fade-in-down">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
