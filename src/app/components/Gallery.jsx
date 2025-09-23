"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { ArrowRightCircle } from "lucide-react";
import axios from "axios";
import API from '../../lib/api'

export default function Gallery() {
  const [galleries, setGalleries] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Fetch gallery API
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await API.get("/gallery");
        setGalleries(res.data);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      }
    };
    fetchGallery();
  }, []);

  // Carousel auto-slide (for main thumbnails if needed)
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) =>
        galleries.length ? (prev + 1) % galleries[0].images.length : 0
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [galleries]);

  return (
    <section className="bg-gradient-to-tr from-yellow-50 via-orange-50 to-yellow-100 py-14">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="flex justify-center items-center mb-3">
            <span className="bg-yellow-500 mr-3 w-14 h-px"></span>
            <h1 className="bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 font-bold text-transparent text-3xl md:text-4xl">
              Explore Our Gallery
            </h1>
            <span className="bg-yellow-500 ml-3 w-14 h-px"></span>
          </div>
          <p className="mx-auto mt-2 max-w-xl text-gray-600 text-sm md:text-base">
            A visual journey through our finest lift installations and services.
          </p>
        </div>

        {/* Card Grid */}
        <div className="gap-8 grid sm:grid-cols-2 md:grid-cols-3">
          {galleries.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-all"
            >
              {/* Top Image */}
              <div className="relative h-48">
                {project.images.length > 0 && (
                  <Image
                    src={project.images[carouselIndex % project.images.length]} // use cloudinary URL directly
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
                <span className="top-3 left-3 absolute bg-yellow-500 shadow px-2.5 py-0.5 rounded-full font-medium text-white text-sm">
                  {project.title}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-4">
                <p className="text-gray-600 text-xs line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {project.images.slice(0, 3).map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedProject(project);
                        setSelectedImage(img);
                      }}
                      className="relative shadow-sm rounded-md w-12 h-12 overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={img} // cloudinary URL
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}

                  {/* Fancy Button */}
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setSelectedImage(project.images[0]);
                    }}
                    className="flex items-center gap-1 hover:bg-yellow-500 ml-auto px-3 py-1.5 border border-yellow-500 rounded-full text-yellow-600 hover:text-white text-xs transition"
                  >
                    View <ArrowRightCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Gallery */}
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          className="z-50 relative"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xl"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex justify-center items-center p-4">
            <DialogPanel className="relative bg-gray-200 shadow-2xl backdrop-blur-xl p-6 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="top-3 right-3 absolute bg-white/70 hover:bg-white shadow p-1.5 rounded-full text-gray-700 hover:text-black transition-all"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="mb-4 font-extrabold text-yellow-700 text-xl text-center">
                {selectedProject?.title} - Project Gallery
              </h2>

              {/* Main Image */}
              {selectedImage && (
                <div className="relative shadow-lg mb-6 rounded-xl w-full h-96 overflow-hidden">
                  <Image
                    src={selectedImage}
                    alt={selectedProject?.title}
                    fill
                    className="object-cover rounded-xl transition-all duration-500"
                  />
                </div>
              )}

              {/* Thumbnails */}
              <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                {selectedProject?.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`group relative h-32 rounded-lg overflow-hidden cursor-pointer transition-all shadow-lg hover:scale-105 ${
                      selectedImage === img ? "ring-2 ring-yellow-500" : ""
                    }`}
                  >
                    <Image
                      src={img} // cloudinary URL
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </section>
  );
}
