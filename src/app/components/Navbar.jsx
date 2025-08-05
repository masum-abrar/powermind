'use client'

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition
} from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Navbar () {
  return (
    <nav className='top-0 z-50 sticky bg-white shadow-md p-4 text-gray-800'>
      <div className='flex justify-between items-center mx-auto max-w-6xl'>
        {/* Logo */}
        <div className='flex items-center space-x-3'>
          <div className='p-2'>
            <img
              src='/new logo.png'
              alt='Logo'
              className='w-42 object-contain'
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-8'>
          {['Home', 'About', 'Services'].map(item => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === 'home' ? '' : item.toLowerCase()
              }`}
              className='group relative font-medium text-gray-600 hover:text-yellow-600 transition-colors duration-300'
            >
              {item}
              <span className='-bottom-1 left-0 absolute bg-gradient-to-r from-yellow-500 to-orange-500 w-0 group-hover:w-full h-0.5 transition-all duration-300'></span>
            </Link>
          ))}
          <Link
            href='/contact'
            className='bg-gradient-to-r from-yellow-500 hover:from-yellow-600 to-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg px-5 py-2.5 rounded-lg font-medium text-white transition-all hover:-translate-y-0.5 duration-300 transform'
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          <Menu as='div' className='inline-block relative text-left'>
            <MenuButton className='bg-gradient-to-r from-yellow-500 to-orange-600 p-2 rounded-lg focus:outline-none text-white'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </MenuButton>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-150'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <MenuItems className='right-0 absolute bg-white ring-opacity-5 shadow-lg mt-2 rounded-md focus:outline-none ring-1 ring-black w-48 origin-top-right'>
                <div className='space-y-1 p-2'>
                  {[
                    'Home',
                    'About',
                    'Services',
                    'Contact'
                  ].map(item => (
                    <MenuItem key={item}>
                      <Link
                        href={`/${
                          item.toLowerCase() === 'home'
                            ? ''
                            : item.toLowerCase()
                        }`}
                        className='block hover:bg-yellow-100 px-4 py-2 rounded text-gray-700 text-sm'
                      >
                        {item}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  )
}
