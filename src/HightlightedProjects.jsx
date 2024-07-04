import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const HighlightedProject = ({ title, description, technologies, image, repoLink, liveLink, delay }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
    delay: delay,
  });

  return (
    <animated.div style={props} className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg transform hover:scale-105 transition-transform duration-500">
      <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-gray-400 mb-4">Technologies: {technologies.join(', ')}</p>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="flex justify-between">
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">GitHub Repo</a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300">Live Demo</a>
      </div>
    </animated.div>
  );
};

const HighlightedProjects = () => {
  const projects = [
    {
      title: "FitFreak",
      description: "FitFreak is a fitness-related website where anyone can join as a normal member and apply for trainer status.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
      image: "https://i.ibb.co/ckKZw7b/fitfreak.png",
      repoLink: "https://github.com/programming-hero-web-course1/b9a12-client-side-ziamnoun",
      liveLink: "https://6669c73d4ca94d4efff23bbd--cerulean-bavarois-ddd558.netlify.app/",
      delay: 0,
    },
    {
      title: "Blog Mania",
      description: "It is a blog related web site where we can see a blog, add a blog, update a blog...",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
      image: "https://i.ibb.co/p055qC2/blog.png",
      repoLink: "https://github.com/ziamnoun/Blog-Mania",
      liveLink: "https://66439e734ee140141d99ad2a--fluffy-torrone-88ede8.netlify.app/",
      delay: 200,
    },
    {
      title: "Fine Art",
      description: "Its an art-related website. Here you can see many kinds of art, add art, update art, and delete art.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
      image: "https://i.ibb.co/fdj9Mxh/Art.png",
      repoLink: "https://github.com/ziamnoun/Fine-Art",
      liveLink: "https://66352b13240d76341ce98582--magical-crisp-1c5563.netlify.app/",
      delay: 400,
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-5xl font-bold text-center mb-16">Highlighted Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <HighlightedProject
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              repoLink={project.repoLink}
              liveLink={project.liveLink}
              delay={project.delay}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/projects" className="btn bg-red-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors duration-300">
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighlightedProjects;

