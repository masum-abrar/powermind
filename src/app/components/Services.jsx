'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import API from '../../lib/api'
import { FaBuilding, FaCogs, FaTools } from 'react-icons/fa'
import PremiumSpinner from './PremiumSpinner'

export default function Services() {
  const [service, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchServices = async () => {
    try {
      const res = await API.get('/services')
      setServices(res.data)
    } catch (err) {
      console.error('Error fetching services:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  const icons = [<FaTools />, <FaBuilding />, <FaCogs />]

 

  return (
    <section className="relative z-10 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title & Subtitle */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center">
            <span className="mr-4 h-px w-16 bg-yellow-500"></span>
            <h1 className="bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Our Services
            </h1>
            <span className="ml-4 h-px w-16 bg-yellow-500"></span>
          </div>
          <p className="mx-auto mt-2 max-w-2xl px-4 text-sm text-gray-500 md:px-0 md:text-base">
            A visual journey through our finest lift installations,
            modernization work, and service excellence across industries.
          </p>
        </div>

        {/* Loader or Services Grid */}
        {loading ? (
          <PremiumSpinner/>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {service.map((item, index) => (
              <Link
                key={index}
                href={`/services/${item.slug}`}
                className="group relative flex flex-grow flex-col items-center justify-center rounded-2xl border border-transparent bg-[#f5f5f5] p-6 shadow-inner transition-all duration-500 hover:scale-[1.03] hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20"
              >
                <div className="absolute -top-6 left-6 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-300 bg-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <span className="text-2xl text-yellow-500 group-hover:animate-spin-slow">
                    {icons[index % icons.length]}
                  </span>
                </div>
                <div className="mt-10 flex grow flex-col justify-between space-y-3">
                  <h3 className="text-lg font-bold text-gray-800 transition group-hover:text-yellow-600">
                    {item.title}
                  </h3>
                  <p className="flex-grow text-sm leading-relaxed text-gray-600">
                    {item.shortDescription}
                  </p>
                  <button className="absolute bottom-0 right-0 m-4 text-xs font-semibold uppercase tracking-wide text-orange-400 opacity-0 transition duration-300 group-hover:opacity-100">
                    {index === 1 ? 'Substation →' : 'Learn More →'}
                  </button>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-yellow-300/30 transition-all duration-500 group-hover:ring-4"></div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
