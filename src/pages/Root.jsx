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
        from-[#FFF7E8] via-[#F6E6FF] to-[#E6ECFF] 
        dark:from-[#0B0E14] dark:via-[#111827] dark:to-[#1F2933]
        transition-colors duration-300
      "
      id='home'
    >

      <div className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-2 ">
          <Navbar />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-28 px-2">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Root
