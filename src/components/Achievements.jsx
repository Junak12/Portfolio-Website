import React from 'react'
import iupcIcon from '../assets/iupc.jpg'      
import datathonIcon from '../assets/datathon.jpg'

const Achievements = () => {
  const achievements = [
    {
      img: iupcIcon,
      title: 'National IUPC Participation',
      description: 'Participated in the prestigious National IUPC competition.',
    },
    {
      img: datathonIcon,
      title: 'Datathon Participation',
      description: 'Took part in a data analytics competition, solving real-world problems.',
    }
  ]

  return (
    <section className="px-4 md:px-20 py-10" id='honor'>
      <h2 className="text-3xl font-bold text-center text-black/80 dark:text-gray-200 mb-4">
        Achievements
      </h2>
      <p className="text-center text-black/70 dark:text-gray-300 mb-10">
        Here are some of the notable milestones and certificates I have earned.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            className="border-2 border-white dark:border-gray-700/50 rounded-xl px-6 py-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)] text-center hover:scale-105 transition"
          >
            <img src={ach.img} alt={ach.title} className="rounded-xl mb-4 h-48 w-full object-cover" />
            <h3 className="text-xl font-semibold text-black/80 dark:text-gray-200 mb-2">{ach.title}</h3>
            <p className="text-black/70 dark:text-gray-300 text-[14px] font-light">{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
