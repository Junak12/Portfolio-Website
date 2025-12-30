import React, { useState, useEffect } from 'react'
import { LuSunMoon, LuMenu, LuX } from 'react-icons/lu'
import arrowicondark from '../assets/right-arrow-bold.png'
import lgo from '../assets/logo_512.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    const isDark = document.documentElement.classList.contains('dark')
    setDark(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  const menuItems = ['Home', 'About Me', 'My Work']

  return (
    <div className="
      relative flex items-center justify-between
      bg-[#ffffff]/60 dark:bg-[#0F172A]/70
      backdrop-blur-md
      rounded-2xl  /* Increased rounding */
      px-5 py-3
      border-b-2 border-gray-200 dark:border-gray-700
      shadow-lg shadow-black/10 dark:shadow-black/40
      mt-2
    ">

      {/* Rounded Image Logo */}
      <img
        src={lgo}
        alt="Logo"
        className="h-12 w-12 md:h-16 md:w-16 rounded-full shadow-lg border border-gray-300 dark:border-gray-600 object-contain"
      />

      {/* Desktop Menu with separators */}
      <div className="hidden md:flex items-center">
        {menuItems.map((item, index) => (
          <React.Fragment key={item}>
            <p
              className="text-md font-medium cursor-pointer transition
                text-black dark:text-gray-200
                hover:text-gray-500 dark:hover:text-gray-400
                hover:font-normal hover:scale-115 px-4"
            >
              {item}
            </p>
            {/* Separator between items */}
            {index < menuItems.length - 1 && (
              <div className="h-6 border-r border-gray-300 dark:border-gray-600" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Dark Mode Toggle */}
        <div
          onClick={toggleTheme}
          className="
            bg-[#ffffff]/60 dark:bg-[#0F172A]/70
            backdrop-blur-md rounded-xl px-4 py-4
            shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
            cursor-pointer transition text-black dark:text-white
            hover:scale-130
          "
        >
          <LuSunMoon />
        </div>

        {/* Connect Button */}
        <button className="
          hidden md:flex items-center gap-2 text-[24px] font-bold
          bg-[#ffffff]/60 dark:bg-[#0F172A]/70
          text-black dark:text-white
          px-8 py-2 rounded-2xl
          shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
          hover:scale-105 hover:text-gray-500 dark:hover:text-gray-400
        ">
          Connect
          <img className="w-4" src={arrowicondark} alt="" />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-black dark:text-white hover:scale-125 hover:cursor-pointer transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="
          absolute top-full right-0 w-40 mt-4
          flex flex-col items-start gap-6
          bg-[#ffffff]/60 dark:bg-[#0F172A]/70
          backdrop-blur-md rounded-2xl  /* Match parent rounding */
          px-5 py-5
          border-b-2 border-gray-200 dark:border-gray-700
          shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.45)]
          md:hidden
        ">
          {menuItems.map(item => (
            <p
              key={item}
              className="text-md font-medium cursor-pointer transition
                text-black dark:text-gray-200
                hover:text-gray-500 dark:hover:text-gray-400
                hover:font-normal"
            >
              {item}
            </p>
          ))}

          <button className="
            flex items-center gap-2 text-[20px] font-bold
            bg-[#ffffff]/60 dark:bg-[#0F172A]/70
            text-black dark:text-white
            px-6 py-2 rounded-2xl
            shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
            hover:scale-105 hover:text-gray-500 dark:hover:text-gray-400
          ">
            Connect
            <img className="w-4" src={arrowicondark} alt="" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
