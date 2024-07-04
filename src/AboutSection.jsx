import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaHtml5, FaCss3, FaGit, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiRedux } from 'react-icons/si';

const AboutSection = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimateSkills(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 1 });

    skillsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="text-lg leading-relaxed text-center">
            <p className="mb-6">
              I am a passionate web developer specializing in building modern web applications using React and other technologies. I am skilled in creating responsive and user-friendly interfaces.
            </p>
            <p className="mb-6">
              My expertise includes:
            </p>
            <div className="flex flex-col items-center justify-center space-y-0">
              <div ref={(el) => (skillsRef.current[0] = el)} className={`flex items-center bg-black rounded-lg p-4 ${animateSkills ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-opacity duration-3000 ease-in-out delay-150 relative`}>
                <FaReact className="text-3xl text-blue-400 mr-2" />
                <span className="text-xl">React.js and React Router</span>
              </div>
              <div className={`w-1 h-8 bg-red-600 mx-auto my-3 ${animateSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-opacity duration-1000 ease-in-out delay-300`}></div>
              <div ref={(el) => (skillsRef.current[1] = el)} className={`flex items-center bg-black rounded-lg p-4 ${animateSkills ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-opacity duration-3000 ease-in-out delay-300 relative`}>
                <FaHtml5 className="text-3xl text-red-400 mr-2" />
                <span className="text-xl">HTML5</span>
              </div>
              <div className={`w-1 h-8 bg-red-600 mx-auto my-3 ${animateSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-opacity duration-1000 ease-in-out delay-450`}></div>
              <div ref={(el) => (skillsRef.current[2] = el)} className={`flex items-center bg-black rounded-lg p-4 ${animateSkills ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-opacity duration-3000 ease-in-out delay-450 relative`}>
                <FaCss3 className="text-3xl text-blue-600 mr-2" />
                <span className="text-xl">CSS3</span>
              </div>
              <div className={`w-1 h-8 bg-red-600 mx-auto my-3 ${animateSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-opacity duration-1000 ease-in-out delay-600`}></div>
              <div ref={(el) => (skillsRef.current[3] = el)} className={`flex items-center bg-black rounded-lg p-4 ${animateSkills ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-opacity duration-3000 ease-in-out delay-600 relative`}>
                <SiJavascript className="text-3xl text-yellow-400 mr-2" />
                <span className="text-xl">Modern JavaScript (ES6+)</span>
              </div>
             
              <div className={`w-1 h-8 bg-red-600 mx-auto my-3 ${animateSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-opacity duration-1000 ease-in-out delay-900`}></div>
              <div ref={(el) => (skillsRef.current[4] = el)} className={`flex items-center bg-black rounded-lg p-4 ${animateSkills ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-opacity duration-3000 ease-in-out delay-900 relative`}>
                <FaNodeJs className="text-3xl text-green-400 mr-2" />
                <span className="text-xl">Node.js</span>
              </div>
              <div className={`w-1 h-8 bg-red-600 mx-auto my-3 ${animateSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-opacity duration-1000 ease-in-out delay-1050`}></div>
              <div ref={(el) => (skillsRef.current[5] = el)} className={`flex items-center bg-black rounded-lg p-4 ${animateSkills ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-opacity duration-3000 ease-in-out delay-1050 relative`}>
                <FaGit className="text-3xl text-red-600 mr-2" />
                <span className="text-xl">Git and GitHub</span>
              </div>
            </div>
            <p className="mt-8 mb-8">
              I am constantly learning and exploring new technologies to improve my skills and stay updated with industry trends. When I'm not coding, you can find me exploring nature or reading a good book.
            </p>
            <p>
              Let's connect and discuss how we can work together to bring your ideas to life. Feel free to reach out through the contact section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;


