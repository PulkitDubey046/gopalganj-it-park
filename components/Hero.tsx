"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import bannerImg0 from "../public/hero-banner.png"
import bannerImg1 from "../public/hero-banner1.jpg"
import bannerImg2 from "../public/hero-banner3.jpg"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { type: "color" },
    { type: "image", src: bannerImg0, alt: "Gopalganj IT Park Lab View" },
    { type: "image", src: bannerImg1, alt: "Gopalganj IT Park NIELIT Course Banner" },
    { type: "image", src: bannerImg2, alt: "Gopalganj IT Park Classroom Training" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handleScrollToForm = () => {
    const formElement = document.getElementById("admission-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-blue-950 text-white w-full aspect-[4/3] sm:aspect-video flex items-center justify-center overflow-hidden transition-all duration-500">
      
      {/* Background Layers Master Loop */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "color" ? (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950" />
            ) : (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.src!}
                  alt={slide.alt!}
                  fill
                  priority={index === 1}
                  className="object-stretch w-full h-full"
                />
                {index === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/90 mix-blend-multiply" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Content Container Panel Layer */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-4 md:px-6 text-center z-10 flex flex-col justify-between py-6 sm:py-12 md:py-16">
        
        {/* Slide 1 Main Content Layout */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div 
            className={`w-full max-w-3xl mx-auto transition-all duration-700 ease-in-out ${
              currentSlide === 0 
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                : "opacity-0 scale-95 -translate-y-4 pointer-events-none absolute"
            }`}
          >
            <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-6 backdrop-blur-sm">
              Admission Open
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-3 sm:mb-6 drop-shadow-md">
              Government Recognized
              <br />
              Computer Training Institute
            </h1>

            <p className="text-xs sm:text-base md:text-xl mb-4 sm:mb-10 text-blue-100 max-w-2xl mx-auto font-medium drop-shadow-sm">
              CCC • O Level • KYP • Basic Computer Training
            </p>

            <div className="flex flex-row gap-3 justify-center items-center w-full max-w-xs sm:max-w-md mx-auto px-4">
              <button 
                onClick={handleScrollToForm}
                className="flex-1 sm:flex-none bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-xs sm:text-sm md:text-base px-4 py-2 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl font-bold shadow-lg shadow-orange-600/20 whitespace-nowrap"
              >
                Apply Online
              </button>

              <a 
                href="tel:+919661520001" 
                className="flex-1 sm:flex-none bg-white text-blue-700 hover:bg-gray-100 active:scale-95 transition-all text-xs sm:text-sm md:text-base px-4 py-2 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-center shadow-lg whitespace-nowrap"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Global Dot Navigation Indicators */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                currentSlide === index 
                  ? "w-5 sm:w-8 bg-orange-500" 
                  : "w-1.5 sm:w-2.5 bg-gray-400/80 sm:bg-white/40 hover:bg-orange-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  )
}