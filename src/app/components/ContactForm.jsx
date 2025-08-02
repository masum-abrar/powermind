// components/ContactForm.js
'use client'
import { useState } from 'react'

export default function ContactForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // In a real application, you would send this data to your Node.js backend API
    // e.g., using fetch or axios:
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    alert('Message sent successfully! (This is a demo, no actual send)')
    setFormData({ name: '', email: '', phone: '', message: '' }) // Clear form
  }

  return (
    <section className='bg-gray-100 py-12'>
      {/* Title & SubTitle */}
      <div className='mb-12 text-center'>
        <div className='flex justify-center items-center mb-4'>
          <span className='bg-yellow-500 mr-4 w-16 h-px'></span>
          <h1 className='bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 font-bold text-transparent text-3xl md:text-4xl'>
            Contact Us
          </h1>
          <span className='bg-yellow-500 ml-4 w-16 h-px'></span>
        </div>
        <p className='mx-auto mt-2 px-4 md:px-0 max-w-2xl text-gray-500 text-sm md:text-base'>
          A visual journey through our finest lift installations, modernization
          work, and service excellence across industries.
        </p>
      </div>
      <div className='bg-white shadow-lg mx-auto p-8 px-4 sm:px-6 lg:px-8 rounded-lg max-w-2xl'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='name'
              className='block font-medium text-gray-700 text-sm'
            >
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='block shadow-sm mt-1 px-3 py-2 border border-gray-300 focus:border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 w-full sm:text-sm'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block font-medium text-gray-700 text-sm'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='block shadow-sm mt-1 px-3 py-2 border border-gray-300 focus:border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 w-full sm:text-sm'
            />
          </div>
          <div>
            <label
              htmlFor='phone'
              className='block font-medium text-gray-700 text-sm'
            >
              Phone
            </label>
            <input
              type='tel'
              name='phone'
              id='phone'
              value={formData.phone}
              onChange={handleChange}
              className='block shadow-sm mt-1 px-3 py-2 border border-gray-300 focus:border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 w-full sm:text-sm'
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block font-medium text-gray-700 text-sm'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              required
              className='block shadow-sm mt-1 px-3 py-2 border border-gray-300 focus:border-yellow-500 rounded-md focus:outline-none focus:ring-yellow-500 w-full sm:text-sm'
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-gradient-to-r from-yellow-500 hover:from-yellow-600 to-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 w-full font-bold text-white transition-all duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
