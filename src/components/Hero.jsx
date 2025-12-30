import React from 'react'
import lgo from '../assets/logo_512.png'
import arrowicondark from '../assets/right-arrow-bold.png'
import codeicon from '../assets/code-icon.png'
import eduicon from '../assets/edu-icon.png'
import expicon from '../assets/project-icon-dark.png'
import vscodeicon from '../assets/vscode.png'
import firebaseicon from '../assets/firebase.png'
import mogodbicon from '../assets/mongodb.png'
import figmaicon from '../assets/figma.png'
import giticon from '../assets/git.png'

const Hero = () => {
  return (
    <div className="px-4 md:px-20">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img className="rounded-full w-48 md:w-80" src={lgo} alt="Junak" />
      </div>

      {/* Intro Text */}
      <div className="mt-4 text-center">
        <h1 className="text-black/60 dark:text-gray-300 text-[24px] font-medium transition">
          Hi! I'm Junak
        </h1>
        <p className="mt-2 text-black/70 dark:text-gray-300 text-[18px] font-medium transition">
          "Aspiring Software Developer <br />
          Driven by Coding & Problem-Solving Excellence"
        </p>
      </div>

      {/* Connect Button */}
      <div className="flex justify-center mt-6">
        <button className="
          flex items-center gap-2
          bg-gray-700 dark:bg-[#0F172A]/70
          text-white/80 dark:text-gray-300
          px-6 py-2 rounded-2xl
          shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
          hover:scale-105 hover:text-gray-100 dark:hover:text-gray-400
          transition
        ">
          Connect with me
          <img className="w-4 mt-1" src={arrowicondark} alt="" />
        </button>
      </div>

      {/* About Section */}
      <div className="mt-14 flex flex-col items-center gap-2 text-center">
        <h3 className="text-black/60 dark:text-gray-300 text-[18px] font-medium">Introduction</h3>
        <h1 className="text-black/60 dark:text-gray-300 text-[32px] font-bold">About Me</h1>
      </div>

      {/* About Content */}
      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        {/* Profile Image / Illustration */}
        <div className="flex-shrink-0">
          <img className="w-48 md:w-100 rounded-xl" src={lgo} alt="Profile" />
        </div>

        {/* Info Text & Cards */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Description */}
            <p className="text-[16px] text-black/80 dark:text-gray-400 font-medium">
                Final semester CSE student at Metropolitan University Sylhet.  
                Passionate about coding and problem-solving, with a Codeforces rating of 1283 and 3⭐ on CodeChef.  
                I enjoy building efficient solutions and exploring new technologies.
            </p>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            {[ 
              { icon: codeicon, title: "Language", content: "React, JavaScript, C++\nPython, Java" },
              { icon: eduicon, title: "Education", content: "B.Sc. in CSE" },
              { icon: expicon, title: "Projects", content: "Built more than 3 projects" }
            ].map((card, index) => (
              <div key={index} className="
                flex-1 flex flex-col gap-2
                border-2 border-white dark:border-gray-700/50
                rounded-xl
                px-6 py-4
                shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
                text-center hover:scale-105
                transition
              ">
                <img className="w-6 mx-auto" src={card.icon} alt={card.title} />
                <p className="text-[18px] font-semibold text-black/75 dark:text-gray-700">{card.title}</p>
                <p className="text-[14px] font-medium text-black/55 dark:text-gray-300 whitespace-pre-line">{card.content}</p>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div className='flex flex-col gap-4 mt-4'>
            <h1 className='text-[18px] text-black/80 dark:text-gray-300 font-semibold'>Tools I Use</h1>
            <div className='flex flex-wrap gap-4'>
              {[vscodeicon, firebaseicon, mogodbicon, figmaicon, giticon].map((icon, idx) => (
                <div
                  key={idx}
                  className='
                    w-14 h-14 flex items-center justify-center
                    border-2 border-gray-300 dark:border-gray-600
                    rounded-xl
                    p-2
                    transition-transform duration-200
                    hover:scale-110
                    bg-white dark:bg-[#1F2933]
                  '
                >
                  <img className='w-8 h-8 object-contain' src={icon} alt={`Tool ${idx}`} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero