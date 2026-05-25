import Image from "next/image"
import logoImg from "../public/gitp_logo.png"

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Render Logo correctly as an Image tag instead of a custom component */}
        <div className="flex justify-center mb-12">
          <Image 
            src={logoImg} 
            alt="Gopalganj IT Park Logo" 
            width={120} 
            height={120} 
            className="object-contain"
            priority
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            About Gopalganj IT Park
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Empowering the youth of Bihar with industry-ready computer education and government-recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Gopalganj IT Park, we bridge the gap between rural youth and modern technology. We specialize in offering highly structured computer training programs like CCC, O Level, and KYP to make students digitally literate and career-ready.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are preparing for government jobs or aiming for private sector IT opportunities, our practical, hands-on lab approach ensures you master skills effectively.
            </p>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-lg space-y-6">
            <h3 className="text-xl font-bold border-b border-blue-700 pb-2 text-yellow-400">
              Why Choose Us?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✓</span>
                <span>Government Recognized Certifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✓</span>
                <span>Fully Equipped Modern Computer Labs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✓</span>
                <span>Expert Faculty & Hands-on Coding Support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">✓</span>
                <span>Focus on Soft Skills & Personality Development</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}