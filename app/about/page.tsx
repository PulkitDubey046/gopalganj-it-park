import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "About Us",
  description: "Learn about the legacy of Gopalganj IT Park, established in 2004, providing trusted computer literacy classes for 22+ years.",
  alternates: { canonical: "https://www.gopalganjitpark.com/about" }
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
              About Gopalganj IT Park
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering the youth of Bihar with industry-ready computer education and government-recognized certifications.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
            <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Gopalganj IT Park, we bridge the gap between rural youth and modern technology. We specialize in offering highly structured computer training programs like CCC, O Level, and KYP to make students digitally literate and career-ready.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are preparing for government jobs or aiming for private sector IT opportunities, our practical, hands-on lab approach ensures you master skills effectively.
              </p>
            </div>

            {/* Key Highlights Cards */}
            <div className="bg-blue-700 text-white p-6 md:p-8 rounded-2xl shadow-md flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold border-b border-blue-500 pb-2">
                Why Choose Us?
              </h3>
              <ul className="space-y-4 text-blue-50">
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

          {/* Statistics Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-gray-100">
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">5+</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Expert Courses</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">1000+</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Students Trained</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">98%</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pass Rate</p>
            </div>
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">100%</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Practical Focus</p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}