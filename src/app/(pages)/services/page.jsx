'use client'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Services from '../../components/Services'
import Image from 'next/image'

export default function ServicesPage () {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar />

      {/* Top Banner Section */}
      <section className="flex lg:flex-row flex-col justify-center items-center gap-8 bg-gradient-to-r from-yellow-100 to-yellow-50 px-6 py-12">
        {/* Text Content */}
        <div className="space-y-6 lg:w-1/2 max-w-xl lg:text-left text-center">
          <h1 className="font-extrabold text-yellow-700 text-4xl">Our Elevator Services</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Explore our range of expert elevator services, crafted for every kind of building —
            residential, commercial, or medical. Quality you can trust for smooth, safe vertical transportation.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:w-1/2">
          <Image
            src="/project1-1.jpeg"
            alt="Elevator Service"
            width={450}
            height={300}
            className="shadow-lg rounded-lg object-cover"
            priority
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="flex-grow bg-gray-50 px-6 md:px-12 lg:px-20 py-16">
        <Services />
      </section>

      <Footer />
    </div>
  )
}
