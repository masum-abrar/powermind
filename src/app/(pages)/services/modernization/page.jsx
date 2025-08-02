'use client'

import Image from 'next/image'

export default function ModernizationPage() {
  return (
    <div className="space-y-10 mx-auto px-4 py-12 max-w-6xl">
      {/* Heading */}
      <div className="text-center">
        <h1 className="mb-4 font-bold text-orange-600 text-4xl">Lift Modernization</h1>
        <p className="text-gray-600 text-lg">
          Upgrade your old lift system with cutting-edge technology, enhanced safety, and better energy efficiency.
        </p>
      </div>

      {/* Content Section */}
      <div className="items-center gap-10 grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src="/project1-2.jpeg"
            alt="Modernized Elevator"
            width={600}
            height={400}
            className="shadow-lg rounded-xl object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold text-gray-800 text-2xl">Why Modernize?</h2>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Improved ride quality and door performance</li>
            <li>Energy-efficient motors and lighting</li>
            <li>Enhanced safety with new control panels</li>
            <li>ADA compliance and smoother interface</li>
            <li>Reduce maintenance costs and downtime</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <p className="mb-4 text-gray-700 text-lg">
          Ready to transform your old lift into a modern masterpiece?
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold text-white transition"
        >
          Request a Modernization Plan →
        </a>
      </div>
    </div>
  )
}
