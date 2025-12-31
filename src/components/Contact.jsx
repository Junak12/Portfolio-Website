import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_cvj4ura',
      'template_ay5e5vi',
      form.current,
      '_gYbjpUSI0B2jHDF_'
    ).then(
      () => {
        alert('Message sent successfully!')
        form.current.reset()
      },
      (error) => {
        alert('Failed to send message. Please try again.')
        console.error(error)
      }
    )
  }

  return (
    <section className="px-4 md:px-20 py-10" id='contact'>
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-black/80 dark:text-gray-200">
          Get In Touch
        </h2>
        <p className="text-center mt-2 text-black/60 dark:text-gray-400">
          Interested in working together or have a question?  
          Feel free to send me a message.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="
            mt-10 space-y-6
            border-2 border-white dark:border-gray-700/50
            rounded-xl
            px-6 py-6
            shadow-[0_6px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
            transition
          "
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
              w-full p-3 rounded-lg outline-none
              bg-white dark:bg-[#020617]
              text-black dark:text-gray-200
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="
              w-full p-3 rounded-lg outline-none
              bg-white dark:bg-[#020617]
              text-black dark:text-gray-200
            "
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="
              w-full p-3 rounded-lg outline-none
              bg-white dark:bg-[#020617]
              text-black dark:text-gray-200
            "
          />

          <button
            type="submit"
            className="
              w-full py-3 rounded-xl
              bg-gray-800 text-white
              hover:bg-gray-900
              transition
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
