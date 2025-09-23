'use client'

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import API from '../../../../lib/api'
import PremiumSpinner from '../../../components/PremiumSpinner'

export default function LiftInstallationPage () {
  const [loaded, setLoaded] = useState(false)
  const [liftService, setLiftService] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await API.get('/services')
        const serviceData = res.data.find(s => s.slug === 'lift-installation')
        setLiftService(serviceData)
      } catch (error) {
        console.error('Error fetching lift service:', error)
      }
    }

    fetchService()
  }, [])



  if (!liftService) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-gray-600'> <PremiumSpinner/> </p>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className='mx-auto px-4 py-16 max-w-7xl'>
        <div className='space-y-4 mb-16 text-center'>
          <h1 className='font-extrabold text-yellow-600 text-4xl'>
            {liftService.title}
          </h1>
          <p className='mx-auto max-w-2xl text-gray-700 text-lg leading-relaxed'>
            {liftService.fullDescription}
          </p>
        </div>

        <div className='space-y-24 px-4 sm:px-6 lg:px-12'>
          {liftService.liftTypes.map((lift, i) => (
            <Transition
              key={lift.id}
              show={loaded}
              enter='transition-opacity duration-1000 delay-[300ms]'
              enterFrom='opacity-0 translate-y-6'
              enterTo='opacity-100 translate-y-0'
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  i % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image Card */}
                <div className='group relative shadow-2xl rounded-2xl w-full md:w-[45%] overflow-hidden'>
                  <Image
                    src={lift.image}
                    alt={lift.title}
                    width={600}
                    height={400}
                    className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'
                  />
                  <span className='top-4 left-4 absolute bg-yellow-100 shadow px-4 py-1 rounded-full font-semibold text-yellow-800 text-sm'>
                    {lift.badge}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-20 pointer-events-none'></div>
                </div>

                {/* Text Section */}
                <div className='space-y-4 bg-white hover:bg-yellow-50 shadow-md hover:shadow-xl p-5 border border-gray-200 rounded-xl w-full md:w-1/2 transition-all hover:-translate-y-1 duration-300 transform'>
                  <h3 className='font-bold text-gray-800 text-2xl'>
                    {lift.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {lift.description}
                  </p>
                  <div className='text-gray-500 text-sm italic'>
                    {lift.feature.join(' || ')}
                  </div>
                  <div className='bg-yellow-400 rounded w-16 h-1'></div>
                </div>
              </div>
            </Transition>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
