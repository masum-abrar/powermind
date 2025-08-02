'use client'

import Image from 'next/image'
import Navbar from '../../components/Navbar'

export default function AboutPage () {
  return (
    <div className='bg-white min-h-screen'>
      <Navbar />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-yellow-100 via-white to-gray-50 px-6 lg:px-20 py-20'>
        <div className='items-center gap-12 grid md:grid-cols-2 mx-auto max-w-7xl'>
          <div className='space-y-6'>
            <h1 className='font-bold text-yellow-600 text-4xl'>
              About Our Lift Solutions
            </h1>
            <p className='text-gray-700 text-lg'>
              We specialize in safe, efficient, and modern elevator systems for
              homes, hospitals, and commercial buildings. Our mission is to
              elevate lives — literally and metaphorically.
            </p>
            <p className='text-gray-600'>
              From installation to maintenance, we ensure your vertical
              transportation needs are smooth, secure, and sustainable.
            </p>
          </div>

          <div className='relative w-full h-[300px] md:h-[400px]'>
            <Image
              src='/project1-2.jpeg'
              alt='Lift image'
              fill
              className='shadow-xl rounded-3xl object-cover'
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className='bg-gray-50 px-6 lg:px-20 py-20'>
        <div className='gap-10 grid md:grid-cols-2 mx-auto max-w-6xl'>
          <div className='bg-white shadow-md hover:shadow-xl p-8 rounded-2xl transition duration-300'>
            <h3 className='mb-4 font-semibold text-yellow-600 text-2xl'>
              🚀 Our Vision
            </h3>
            <p className='text-gray-700'>
              To become the most trusted lift solution provider in Southeast
              Asia by redefining vertical transportation standards.
            </p>
          </div>

          <div className='bg-white shadow-md hover:shadow-xl p-8 rounded-2xl transition duration-300'>
            <h3 className='mb-4 font-semibold text-yellow-600 text-2xl'>
              🎯 Our Mission
            </h3>
            <p className='text-gray-700'>
              Deliver safe, efficient, and eco-friendly lift installations
              backed by top-tier engineering and 24/7 customer support.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / Story Section */}
      <section className='bg-white px-6 lg:px-20 py-20'>
        <div className='mx-auto max-w-6xl text-center'>
          <h2 className='mb-8 font-bold text-gray-800 text-3xl'>Our Journey</h2>
          <div className='gap-6 grid md:grid-cols-3 text-left'>
            <div className='bg-yellow-50 shadow-sm hover:shadow-lg p-6 rounded-xl transition'>
              <h4 className='mb-2 font-semibold text-xl'>🔧 Founded</h4>
              <p className='text-gray-600'>
                Started in 2018 with a team of passionate engineers aiming to
                transform building mobility.
              </p>
            </div>
            <div className='bg-yellow-50 shadow-sm hover:shadow-lg p-6 rounded-xl transition'>
              <h4 className='mb-2 font-semibold text-xl'>
                🏢 First 100+ Installs
              </h4>
              <p className='text-gray-600'>
                By 2021, we completed 100+ successful residential and commercial
                installations.
              </p>
            </div>
            <div className='bg-yellow-50 shadow-sm hover:shadow-lg p-6 rounded-xl transition'>
              <h4 className='mb-2 font-semibold text-xl'>🌍 Expanding</h4>
              <p className='text-gray-600'>
                Now operating across major cities with a goal to expand
                nationwide by 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-yellow-100 px-6 py-20 text-center'>
        <h2 className='font-bold text-gray-800 text-3xl'>
          Ready to Elevate Your Space?
        </h2>
        <p className='mt-4 mb-6 text-gray-700'>
          Let’s build your future with reliable, modern lift solutions.
        </p>
        <button className='bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-full font-semibold text-white transition'>
          Contact Us
        </button>
      </section>
    </div>
  )
}
