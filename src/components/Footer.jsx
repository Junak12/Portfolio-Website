import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-[#ffffff]/60 dark:bg-[#0F172A]/90 backdrop-blur-md py-6 border-t border-gray-200 dark:border-gray-700 rounded-xl">
      
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-black/80 dark:text-gray-200">S S P Junak</h3>

          <div className="flex gap-3">
            
            <a
              href="https://www.facebook.com/siddharth.paul.junak/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/siddharth_junak/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/s-s-p-junak-99942a252/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Junak12"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full 
                         bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-600 mb-4" />

        <div className="text-black/50 dark:text-gray-400 text-center text-sm">
          © 2025 All rights reserved
        </div>

      </div>
    </footer>
  )
}

export default Footer
