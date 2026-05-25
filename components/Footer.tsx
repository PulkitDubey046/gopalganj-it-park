"use client"

import Link from "next/link"
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 px-6 border-t border-blue-800 relative z-10">
      
      {/* Top Section: Main Content Grid mapping image_65832a.png & image_658380.png */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-blue-800">
        
        {/* Column 1: Institutional Branding */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            Gopalganj IT Park
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            Government recognized computer training institute in Gopalganj, Bihar. Providing trusted IT certifications and practical literacy since 2004.
          </p>
        </div>

        {/* Column 2: Quick Links / Course Index */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-300 tracking-wider uppercase text-xs">
            Our Courses
          </h3>
          <ul className="space-y-2.5 text-blue-100 text-sm font-medium">
            <li><Link href="/courses/ccc" className="hover:text-white transition">NIELIT CCC</Link></li>
            <li><Link href="/courses/o-level" className="hover:text-white transition">NIELIT O Level</Link></li>
            <li><Link href="/courses/kyp" className="hover:text-white transition">KYP Skill Development</Link></li>
            <li><Link href="/courses" className="hover:text-white transition">Basic Computer Training</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Address Coordinates */}
        <div className="space-y-3 text-sm text-blue-100">
          <h3 className="text-lg font-semibold mb-4 text-blue-300 tracking-wider uppercase text-xs">
            Connect With Us
          </h3>
          <p className="leading-relaxed">
            📍 Yadavpur Road Near Hotel Kailash,<br /> Gopalganj, Bihar, India
          </p>
          <p className="pt-1">
            📞 <a href="tel:+919661520001" className="hover:text-white transition font-semibold">+91 9661520001</a>
          </p>
          <p>
            ✉️ <a href="mailto:gopalganji1@gmail.com" className="hover:text-white transition">gopalganjitpark@gmail.com</a>
          </p>
        </div>

        {/* Column 4: Social Icon Matrix (Replicating Balaji Follow Us Layout in image_658380.png) */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-blue-300 tracking-wider uppercase text-xs">
            Follow us
          </h3>
          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com/gopalganjitpark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 border border-white/10 flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110"
              aria-label="Facebook Profile"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a 
              href="https://youtube.com/gopalganjitpark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 border border-white/10 flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110"
              aria-label="Youtube Channel"
            >
              <FaYoutube className="text-sm" />
            </a>
            <a 
              href="https://instagram.com/gopalganjitpark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 border border-white/10 flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="text-sm" />
            </a>
            <a 
              href="https://x.com/gopalganjitpark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-black border border-white/10 flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110"
              aria-label="X Twitter Profile"
            >
              <FaXTwitter className="text-sm" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section: Copyright Bar with backlinked portfolio routing */}
      <div className="max-w-7xl mx-auto pt-8 text-center text-xs md:text-sm text-blue-200/70 space-y-2">
        <p>
          &copy; {new Date().getFullYear()} Gopalganj IT Park. All rights reserved.
        </p>
        <p className="tracking-wide">
          Developed by{" "}
          <a 
            href="https://pulkitdubey.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 font-semibold hover:text-yellow-300 hover:underline transition-all underline-offset-4 duration-200"
          >
            Pulkit Dubey
          </a>
        </p>
      </div>

    </footer>
  )
}