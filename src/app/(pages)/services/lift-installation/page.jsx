'use client'

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const liftTypes = [
  {
    title: 'Home Lift',
    image: '/project1-1.jpeg',
    badge: 'Residential',
    description:
      'Perfect for multi-story private homes, offering quiet operation, elegant design, and space efficiency. Ideal for seniors or those with mobility challenges.',
    feature: 'Low noise | Energy efficient | Compact design'
  },
  {
    title: 'Hospital Lift',
    image: '/project2-1.jpeg',
    badge: 'Medical',
    description:
      'Designed for patient safety and hospital logistics. Accommodates stretchers, wheelchairs, and medical equipment with hygiene-focused interiors.',
    feature: 'Stretcher support | Smooth ride | Sanitary walls'
  },
  {
    title: 'Panoramic Lift',
    image: '/project1-2.jpeg',
    badge: 'Commercial',
    description:
      'Featuring transparent glass walls, these lifts add luxury and visibility—ideal for malls, hotels, or modern offices aiming for architectural elegance.',
    feature: '360° view | Premium finish | Modern design'
  }
]

export default function LiftInstallationPage () {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <div className='mx-auto px-4 py-16 max-w-7xl'>
        <div className='space-y-4 mb-16 text-center'>
          <h1 className='font-extrabold text-yellow-600 text-4xl'>
            Lift Installation Service
          </h1>
          <p className='mx-auto max-w-2xl text-gray-700 text-lg leading-relaxed'>
            We install all types of lifts with certified safety standards and
            premium design aesthetics. Whether you're building a home or a
            hospital, we tailor the lift experience to your needs.
          </p>
        </div>

        <div className='space-y-24 px-4 sm:px-6 lg:px-12'>
          {liftTypes.map((lift, i) => (
            <Transition
              key={i}
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
                    {lift.feature}
                  </div>
                  <div className='bg-yellow-400 rounded w-16 h-1'></div>
                </div>
              </div>
            </Transition>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
