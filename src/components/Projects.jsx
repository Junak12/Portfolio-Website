import React from "react";
import smart_hospital from "../assets/smart_hospital.png";

import netflix from "../assets/netflix.png";
import freelanceMarketplace from "../assets/banner7.png";
import Ecommerce from "../assets/eco.webp";



const Projects = () => {
  const projects = [
    {
      img: freelanceMarketplace,
      title: "Freelance Marketplace",
      description:
        "Full-stack MERN freelance platform. Clients can post jobs, freelancers can accept tasks. Features secure authentication with verifyToken middleware and responsive design for desktop, tablet, and mobile.",
      tech: [
        "React",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      github: "https://github.com/Junak12/freelance-marketplace-Server",
      live: "https://sensational-trifle-4aa337.netlify.app/",
    },
    {
      img: Ecommerce,
      title: "React E-commerce",
      description:
        "Modern React e-commerce app with Tailwind CSS, responsive design, cart functionality, and user authentication. Features dynamic Navbar, mobile-friendly layout, and cart persistence using localStorage.",
      tech: ["React", "Tailwind", "Firebase", "LocalStorage"],
      github: "https://github.com/Junak12/Junak-Ecommerce",
      live: "https://cute-mandazi-81e5cc.netlify.app/",
    },
    {
      img: smart_hospital,
      title: "Smart Hospital",
      description:
        "Full-stack healthcare platform with role-based login. Book appointments, manage payments, schedules, and earnings efficiently.",
      tech: ["React", "Tailwind", "Express.js", "MongoDB"],
      github: "https://github.com/Junak12/Project-300-Final-",
    },
  ];

  const techColors = [
    "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
    "bg-gradient-to-r from-green-400 to-green-600 text-white",
    "bg-gradient-to-r from-pink-400 to-pink-600 text-white",
    "bg-gradient-to-r from-purple-400 to-purple-600 text-white",
    "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
    "bg-gradient-to-r from-red-400 to-red-600 text-white",
  ];

  return (
    <div className="px-4 md:px-20 py-10" id="projects">
      <h1 className="text-[32px] font-bold text-black/80 dark:text-gray-300 text-center mb-4">
        My Projects
      </h1>
      <p className="text-center text-black/70 dark:text-gray-300 mb-10">
        Explore a selection of my projects, showcasing my expertise in
        full-stack and front-end development, <br />
        problem-solving, and creating responsive, user-friendly applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="
              flex flex-col
              border-2 border-white dark:border-gray-700/50
              rounded-xl
              px-6 py-4
              shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
              text-center
              hover:scale-105 transition
              h-full
            "
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl mb-4 object-cover h-48 w-full"
            />
            <h2 className="text-xl font-semibold text-black/80 dark:text-gray-200 mb-2">
              {project.title}
            </h2>
            <p className="text-black/70 dark:text-gray-300 text-[14px] font-light flex-1">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className={`text-sm px-3 py-1 rounded-full ${techColors[i % techColors.length]}`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => window.open(project.github, "_blank")}
                className="bg-gray-700 dark:bg-[#0F172A]/70 text-white px-4 py-2 rounded-lg hover:scale-90 transition cursor-pointer"
              >
                Github
              </button>
              {project.live && (
                <button
                  onClick={() => window.open(project.live, "_blank")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-90 transition cursor-pointer"
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
