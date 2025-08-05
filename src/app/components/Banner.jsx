"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LiftSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Where Reliability Meets Long-Term Relationships",
      description:
        "We don’t just install elevators — we build long-term partnerships through quality, reliability, and care.",
      image:
        "https://blog.uwcped.org/wp-content/uploads/2023/02/effective-meeting-blog.jpg",
      cta: "Contact Us",
    },
    {
      title: "Expert Maintenance Services",
      description:
        "Our skilled technicians provide 24/7 support to keep your elevators running safely and smoothly",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      cta: "Service Plans",
    },
    {
      title: "Elevating with Smart Lift Technology.",
      description:
        "Premium Elevator Solutions for Modern Buildings - Enhanced Safety, Efficiency, and Reliability.",
      image:
        "https://www.zuper.co/wp-content/uploads/2023/06/648af6e9790d34e8e34fd9ff_Elevator-Maintenance.webp",
      cta: "View Our Lifts",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative flex-shrink-0 w-full h-full">
            {/* Background Image with overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-gray-900/30"></div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16 h-full text-white">
              <div className="space-y-6 max-w-2xl">
                <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/10 rounded-full font-semibold text-yellow-300 text-sm uppercase tracking-wider">
                  PowerMind Excellence
                </span>
                <h2 className="font-bold text-3xl md:text-xl lg:text-5xl leading-tight">
                  {slide.title}
                </h2>
                <p className="opacity-90 max-w-lg text-lg md:text-xl lg:text-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transition"
                  >
                    {slide.cta}
                  </Link>
                  <button className="hover:bg-white/10 backdrop-blur-sm px-8 py-3 border-2 border-white/50 rounded-lg font-medium text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="bottom-8 left-1/2 z-10 absolute flex space-x-2 -translate-x-1/2 transform">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-8 scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="top-1/2 left-4 md:left-8 absolute bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 border border-white/10 hover:border-white/20 rounded-full text-white transition-all -translate-y-1/2 duration-300"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="top-1/2 right-4 md:right-8 absolute bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 border border-white/10 hover:border-white/20 rounded-full text-white transition-all -translate-y-1/2 duration-300"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
