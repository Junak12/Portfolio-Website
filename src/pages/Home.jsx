import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div className='mt-15'>
      <Hero />
      <div className='mt-20'>
        <Projects />
      </div>
    </div>
  )
}

export default Home