"use client"

import { useState, use } from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  if (slug !== "gallery") {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-gray-500 font-medium">Page not found.</p>
        </main>
        <Footer />
      </>
    )
  }

  const galleryImages = Array.from({ length: 20 }, (_, i) => `/gitp${i + 1}.jpg`)

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1))
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0))
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight">
                Campus Gallery
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                A glimpse into our classrooms, computer labs, and celebrations.
              </p>
            </div>
            <Link 
              href="/about" 
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 border border-blue-200 bg-white px-4 py-2 rounded-xl shadow-sm transition"
            >
              &larr; Back to About
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                onClick={() => setCurrentIndex(index)}
                className="relative h-56 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition duration-300 cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Gopalganj IT Park Gallery Image ${index + 1}`}
                  fill
                  sizes="(max-w-640px) 100vw, (max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </main>

      {currentIndex !== null && (
        <div 
          onClick={() => setCurrentIndex(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm select-none"
        >
          <button 
            onClick={() => setCurrentIndex(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 transition w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold z-55"
            aria-label="Close slider"
          >
            &times;
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-6 text-white bg-white/10 hover:bg-white/20 transition w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold z-55"
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center gap-4"
          >
            <img
              src={galleryImages[currentIndex]}
              alt={`Expanded view ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            
            <p className="text-white/60 text-sm font-medium tracking-wide bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
              {currentIndex + 1} / {galleryImages.length}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-6 text-white bg-white/10 hover:bg-white/20 transition w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold z-55"
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>
      )}

      <Footer />
    </>
  )
}