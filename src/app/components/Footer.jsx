import { FaWhatsapp } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function Footer () {
  return (
    <footer className='bg-gradient-to-tr from-white via-yellow-50 to-white px-6 py-8 border-yellow-100 border-t text-gray-700'>
      <div className='flex md:flex-row flex-col justify-between items-center gap-6 mx-auto max-w-6xl'>
        {/* Left: Company Info */}
        <p className='text-sm md:text-left text-center'>
          &copy; {new Date().getFullYear()} PowerMind Engineering. All rights
          reserved.
        </p>

        {/* Right: Profile & Contact */}
        <div className='flex md:flex-row flex-col items-center gap-4 text-sm'>
          {/* Profile Link */}
          <a
            href='https://drive.google.com/drive/folders/136YbAu761aaloe-OwlBQCTssZl2q19xf'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 hover:text-orange-600 transition'
          >
            Our Profile
            <HiArrowUpRight className='text-base' />
          </a>

          {/* Divider */}
          <span className='hidden md:inline-block bg-gray-300 w-px h-4'></span>

          {/* WhatsApp */}
          <a
            href='https://wa.me/8801710833201'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:text-green-600 transition'
          >
            <FaWhatsapp className='text-base' />
            +8801710833201
          </a>
        </div>
      </div>
    </footer>
  )
}
