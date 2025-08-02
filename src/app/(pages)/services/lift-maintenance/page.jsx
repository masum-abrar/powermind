// app/services/lift-maintenance/page.tsx

'use client'

import ContactForm from '../../../components/ContactForm'
import Navbar from '../../../components/Navbar'
import { useState } from 'react'

export default function LiftMaintenancePage () {
  // const [form, setForm] = useState({ name: '', email: '', message: '' })

  // const handleChange = (e) => {
  //   setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // handle form submit logic here (API, mail, etc.)
  //   alert('Submitted!')
  // }

  return (
    <>
      <Navbar></Navbar>
      <ContactForm></ContactForm>
    </>
    // <div className='space-y-10 mx-auto px-4 py-12 max-w-3xl'>
    //   <h1 className='font-bold text-yellow-600 text-4xl'>Lift Maintenance</h1>
    //   <p className='text-gray-700'>
    //     Ensure safety, performance, and compliance through regular inspections and timely servicing of your lifts.
    //     We offer monthly and quarterly maintenance plans.
    //   </p>

    //   <div className='bg-white shadow-md p-6 rounded-xl'>
    //     <h2 className='mb-4 font-semibold text-gray-800 text-2xl'>Request Maintenance</h2>
    //     <form onSubmit={handleSubmit} className='space-y-4'>
    //       <div>
    //         <label className='block font-medium text-gray-700 text-sm'>Name</label>
    //         <input
    //           type='text'
    //           name='name'
    //           required
    //           value={form.name}
    //           onChange={handleChange}
    //           className='shadow-sm mt-1 px-4 py-2 border border-gray-300 focus:border-yellow-500 rounded-md focus:ring-yellow-500 w-full'
    //         />
    //       </div>
    //       <div>
    //         <label className='block font-medium text-gray-700 text-sm'>Email</label>
    //         <input
    //           type='email'
    //           name='email'
    //           required
    //           value={form.email}
    //           onChange={handleChange}
    //           className='shadow-sm mt-1 px-4 py-2 border border-gray-300 focus:border-yellow-500 rounded-md focus:ring-yellow-500 w-full'
    //         />
    //       </div>
    //       <div>
    //         <label className='block font-medium text-gray-700 text-sm'>Message</label>
    //         <textarea
    //           name='message'
    //           rows={4}
    //           required
    //           value={form.message}
    //           onChange={handleChange}
    //           className='shadow-sm mt-1 px-4 py-2 border border-gray-300 focus:border-yellow-500 rounded-md focus:ring-yellow-500 w-full'
    //         ></textarea>
    //       </div>
    //       <button
    //         type='submit'
    //         className='bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-lg font-bold text-white transition'
    //       >
    //         Submit Request
    //       </button>
    //     </form>
    //   </div>
    // </div>
  )
}
