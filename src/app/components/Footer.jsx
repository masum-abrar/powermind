import { FaWhatsapp } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative bg-gradient-to-tr from-yellow-50 via-white to-yellow-100 border-t border-yellow-200 text-gray-700 px-6 py-12 backdrop-blur-lg shadow-lg">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-12">
        
        {/* Left: Logo & Info */}
        <div className="flex flex-col gap-3 max-w-sm">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-wide">
            PowerMind Engineering
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Innovative engineering solutions with a passion for excellence.
            Building a smarter and sustainable future together.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            &copy; {new Date().getFullYear()} PowerMind Engineering. All rights reserved.
          </p>
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium items-start sm:items-center">
          <Link href="/about" className="relative group">
            <span className="hover:text-orange-600 transition">About</span>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/services" className="relative group">
            <span className="hover:text-orange-600 transition">Services</span>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group">
            <span className="hover:text-orange-600 transition">Contact Us</span>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Right: Profile & Contact */}
        <div className="flex flex-col gap-4 sm:items-end">
          
          {/* Visit Profile Button */}
          <a
            href="https://drive.google.com/drive/folders/136YbAu761aaloe-OwlBQCTssZl2q19xf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-3 rounded-xl shadow-lg transition transform hover:scale-105 text-sm font-medium"
          >
            Visit Our Profile
            <HiArrowUpRight className="text-lg" />
          </a>

          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/8801710833201"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-3 rounded-xl shadow-lg transition transform hover:scale-105 text-sm font-medium"
          >
            <FaWhatsapp className="text-lg" />
            +8801710833201
          </a>
        </div>
      </div>
    </div>
  );
}
