import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const Root = () => {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#FFFDF4] via-[#F9F3FF] to-[#F0F4FF]
        dark:from-[#0B0E14] dark:via-[#111827] dark:to-[#1F2933]
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto py-2 px-2">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Root
