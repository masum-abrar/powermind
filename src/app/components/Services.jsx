'use client'

import Link from 'next/link'
import { services } from '../../lib/servicesData'

export default function Services () {
  return (
    <section className='z-10 relative bg-white py-16'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>
        {/* Title & SubTitle */}
        <div className='mb-12 text-center'>
          <div className='flex justify-center items-center mb-4'>
            <span className='bg-yellow-500 mr-4 w-16 h-px'></span>
            <h1 className='bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 font-bold text-transparent text-3xl md:text-4xl'>
              Our Services
            </h1>
            <span className='bg-yellow-500 ml-4 w-16 h-px'></span>
          </div>
          <p className='mx-auto mt-2 px-4 md:px-0 max-w-2xl text-gray-500 text-sm md:text-base'>
           Providing comprehensive vertical transportation and power solutions
          </p>
        </div>

        {/* Card Grid */}
        <div className='gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {/* Card 1 */}
          <Link
            href={`/services/${services[0].slug}`}
            className='group relative flex flex-col flex-grow justify-center items-center bg-[#f5f5f5] shadow-inner hover:shadow-xl hover:shadow-yellow-400/20 p-6 border hover:border-yellow-400 border-transparent rounded-2xl hover:scale-[1.03] transition-all duration-500'
          >
            <div className='-top-6 left-6 absolute flex justify-center items-center bg-white shadow-lg border border-yellow-300 rounded-full w-14 h-14 group-hover:scale-110 transition-transform duration-500'>
              <span className='text-yellow-500 text-2xl group-hover:animate-spin-slow'>
                {services[0].icon}
              </span>
            </div>
            <div className='flex flex-col flex-grow justify-between space-y-3 mt-10'>
              <h3 className='font-bold text-gray-800 group-hover:text-yellow-600 text-lg transition'>
                {services[0].title}
              </h3>
              <p className='flex-grow text-gray-600 text-sm leading-relaxed'>
                {services[0].shortDescription}
              </p>
              <button className='right-0 bottom-0 absolute opacity-0 group-hover:opacity-100 m-4 font-semibold text-orange-400 text-xs uppercase tracking-wide transition duration-300'>
                Learn More →
              </button>
            </div>
            <div className='absolute inset-0 rounded-2xl ring-0 ring-yellow-300/30 group-hover:ring-4 transition-all duration-500 pointer-events-none'></div>
          </Link>

          {/* Card 2 */}
          <Link
            href={`/services/${services[1].slug}`}
            className='group relative flex flex-col flex-grow justify-center items-center bg-[#f5f5f5] shadow-inner hover:shadow-xl hover:shadow-yellow-400/20 p-6 border hover:border-yellow-400 border-transparent rounded-2xl hover:scale-[1.03] transition-all duration-500'
          >
            <div className='-top-6 left-6 absolute flex justify-center items-center bg-white shadow-lg border border-yellow-300 rounded-full w-14 h-14 group-hover:scale-110 transition-transform duration-500'>
              <span className='text-yellow-500 text-2xl group-hover:animate-spin-slow'>
                {services[1].icon}
              </span>
            </div>
            <div className='flex flex-col flex-grow justify-between space-y-3 mt-10'>
              <h3 className='font-bold text-gray-800 group-hover:text-yellow-600 text-lg transition'>
                {services[1].title}
              </h3>
              <p className='flex-grow text-gray-600 text-sm leading-relaxed'>
                {services[1].shortDescription}
              </p>
              <button className='right-0 bottom-0 absolute opacity-0 group-hover:opacity-100 m-4 font-semibold text-orange-400 text-xs uppercase tracking-wide transition duration-300'>
                Substation →
              </button>
            </div>
            <div className='absolute inset-0 rounded-2xl ring-0 ring-yellow-300/30 group-hover:ring-4 transition-all duration-500 pointer-events-none'></div>
          </Link>

          {/* Card 3 */}
          <Link
            href={`/services/${services[2].slug}`}
            className='group relative flex flex-col flex-grow justify-center items-center bg-[#f5f5f5] shadow-inner hover:shadow-xl hover:shadow-yellow-400/20 p-6 border hover:border-yellow-400 border-transparent rounded-2xl hover:scale-[1.03] transition-all duration-500'
          >
            <div className='-top-6 left-6 absolute flex justify-center items-center bg-white shadow-lg border border-yellow-300 rounded-full w-14 h-14 group-hover:scale-110 transition-transform duration-500'>
              <span className='text-yellow-500 text-2xl group-hover:animate-spin-slow'>
                {services[2].icon}
              </span>
            </div>
            <div className='flex flex-col flex-grow justify-between space-y-3 mt-10'>
              <h3 className='font-bold text-gray-800 group-hover:text-yellow-600 text-lg transition'>
                {services[2].title}
              </h3>
              <p className='flex-grow text-gray-600 text-sm leading-relaxed'>
                {services[2].shortDescription}
              </p>
              <button className='right-0 bottom-0 absolute opacity-0 group-hover:opacity-100 m-4 font-semibold text-orange-400 text-xs uppercase tracking-wide transition duration-300'>
                Learn More →
              </button>
            </div>
            <div className='absolute inset-0 rounded-2xl ring-0 ring-yellow-300/30 group-hover:ring-4 transition-all duration-500 pointer-events-none'></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
