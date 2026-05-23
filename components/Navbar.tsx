"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { HiMenu, HiX } from "react-icons/hi" // Importing standard burger and close icons
import logoImg from "../public/gitp_logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Group: Logo & Title */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <Image 
            src={logoImg} 
            alt="Gopalganj IT Park Logo" 
            width={45} 
            height={45} 
            className="object-contain"
            priority 
          />
          <h1 className="text-2xl font-bold text-blue-700">
            Gopalganj IT Park
          </h1>
        </Link>

        {/* Desktop Navigation Links (Hidden on mobile, shown on md screens and up) */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/courses" className="hover:text-blue-700 transition">Courses</Link>
          <Link href="/about" className="hover:text-blue-700 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
        </div>

        {/* Mobile Hamburger / Close Button Container (Hidden on desktop) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-3xl text-blue-700 focus:outline-none transition-transform duration-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay Panel */}
      <div 
        className={`
          fixed top-[77px] left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out md:hidden
          ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="flex flex-col p-6 space-y-4 font-medium text-lg">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-blue-700 border-b border-gray-50 pb-2 transition"
          >
            Home
          </Link>
          <Link 
            href="/courses" 
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-blue-700 border-b border-gray-50 pb-2 transition"
          >
            Courses
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-blue-700 border-b border-gray-50 pb-2 transition"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-blue-700 pb-1 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}