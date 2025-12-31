import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Achievements from '../components/Achievements'

const Home = () => {
  return (
    <div className='mt-10'>
      <Hero />
      <div className='mt-20'>
        <Projects />
      </div>
      <div className='mt-4'>
         <Achievements/>
      </div>
      <div className='mt-5'>
        <Contact />
      </div>
    </div>
  )
}

export default Home