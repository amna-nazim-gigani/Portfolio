// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Cafe App",
    description: "BeanIvyCafeApp is a modern, responsive web app for a fictional café, built with React and Tailwind CSS. It offers a clean, interactive UI with smooth navigation and dynamic components, ensuring a seamless experience across devices while focusing on performance and user experience.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    link: "https://github.com/Wolfgang2025/BeanIvyCafeApp", // GitHub link (or live site link)
  },
  {
    title: "TextBased Adventure Game",
    description:"Developed a Python-based text adventure game using OOP principles. Implemented a Room class with attributes, descriptions, and linked rooms for navigation. Focused on encapsulation, inheritance, and interactive gameplay.",
    technologies: ["Python, Object-Oriented Programming"],
    link: "https://github.com/yourusername/project2", // GitHub link (or live site link)
  },
  {
    title: "Portfolio Website",
    description: "A dynamic, user-friendly application built using custom AI prompts and styled with Tailwind CSS. This project demonstrates my ability to integrate advanced AI tools with modern web development for innovative and responsive design.",
    technologies: ["JavaScript, Node.js, Angular", "Bootstrap", "Firebase"],
    link: "https://github.com/yourusername/project2", // GitHub link (or live site link)
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#100020] to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#d5a3ff] mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1e0036] p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                Technologies: {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-400 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
