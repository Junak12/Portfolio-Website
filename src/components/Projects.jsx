import React from 'react'
import smart_hospital from '../assets/smart_hospital.png'
import gym from '../assets/gym.png'
import netflix from '../assets/netflix.png'

const Projects = () => {
  const projects = [
    {
      img: smart_hospital,
      title: 'Smart Hospital',
      description: 'Full-stack healthcare platform with role-based login. Book appointments, manage payments, schedules, and earnings efficiently.',
      tech: ['React', 'Tailwind', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Junak12/Project-300-Final-'
    },
    {
      img: gym,
      title: 'Gym Center',
      description: 'Fitness app with personalized workout plans, BMI calculation, meal & protein suggestions, and health tips.',
      tech: ['React', 'CSS', 'Nodemailer'],
      github: 'https://github.com/Junak12/Web-Programming-Project'
    },
    {
      img: netflix,
      title: 'Netflix Clone',
      description: 'Interactive streaming platform with user authentication and movie browsing. Fully responsive for desktop and mobile.',
      tech: ['React', 'Tailwind', 'Firebase'],
      github: 'https://github.com/Junak12/NetFlix'
    }
  ]

  const techColors = [
    'bg-gradient-to-r from-blue-400 to-blue-600 text-white',
    'bg-gradient-to-r from-green-400 to-green-600 text-white',
    'bg-gradient-to-r from-pink-400 to-pink-600 text-white',
    'bg-gradient-to-r from-purple-400 to-purple-600 text-white',
    'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white',
    'bg-gradient-to-r from-red-400 to-red-600 text-white'
  ]

  return (
    <div className="px-4 md:px-20 py-10">
      <h1 className='text-[32px] font-bold text-black/80 dark:text-gray-300 text-center mb-4'>My Projects</h1>
      <p className='text-center text-black/70  dark:text-gray-300 mb-10'>
        Explore a selection of my projects, showcasing my expertise in full-stack and front-end development, <br /> problem-solving, and creating responsive, user-friendly applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#E3F2FD] via-[#F0F7FF] to-[#FFFFFF] 
                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
                       rounded-2xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-200 h-full"
          >
            <img src={project.img} alt={project.title} className="rounded-xl mb-4 object-cover h-48 w-full" />
            <h2 className="text-xl font-semibold text-black/80 dark:text-gray-200 mb-2">{project.title}</h2>
            <p className="text-black/70 dark:text-gray-300 text-[14px] font-light flex-1">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, i) => (
                <span key={i} className={`text-sm px-3 py-1 rounded-full ${techColors[i % techColors.length]}`}>
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            <button
              onClick={() => window.open(project.github, "_blank")}
              className="mt-4 bg-gray-700 dark:bg-[#0F172A]/70 text-white px-4 py-2 rounded-lg hover:scale-90 transition hover:cursor-pointer"
            >
              Github
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
