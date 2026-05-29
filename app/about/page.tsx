import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "About Us | Gopalganj IT Park",
  description: "Learn about the legacy of Gopalganj IT Park, established on 3rd December 2004, providing trusted NIELIT and BSDM computer training in Bihar for 22+ years.",
  alternates: { canonical: "https://www.gopalganjitpark.com/about" }
};

export default function AboutPage() {
  const previewImages = ["/gitp1.jpg", "/gitp2.jpg", "/gitp3.jpg"]

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-xs md:text-sm uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20 inline-block mb-4">
              Our Educational Legacy Since 2004
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 tracking-tight">
              About Gopalganj IT Park
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Empowering the youth of Bihar with industry-ready computer education and government-recognized certifications.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12 space-y-6 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-800">Welcome to Gopalganj IT Park (GITP)</h2>
            <p>
              Gopalganj IT Park (GITP) is one of the leading computer education and skill development institutes in Gopalganj, Bihar. Established on 3rd December 2004, GITP has been continuously working to provide quality computer education, digital literacy, and professional IT training to students from both rural and urban areas. With more than 20 years of educational experience, the institute has earned the trust of students and parents through dedication, discipline, practical learning, and student-focused education.
            </p>
            <p>
              Since the beginning of our journey, our mission has been to empower students with modern technological knowledge and practical computer skills that help them succeed in education, employment, and professional life. In today’s digital world, computer knowledge is no longer optional — it has become an essential requirement for career growth and daily life. GITP was established with the vision of making quality computer education accessible and affordable for every student, especially those from rural and semi-urban backgrounds.
            </p>
            <p>
              Over the years, thousands of students have successfully completed various computer and skill development courses from our institute and moved toward better career opportunities, higher education, and professional success.
            </p>
          </div>

          {/* New 3-Image Preview Grid & View More Button (Placed above Our Journey) */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Campus Highlights</h2>
              <Link 
                href="/about/gallery" 
                className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline transition"
              >
                View More Gallery &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {previewImages.map((src, index) => (
                <div 
                  key={index} 
                  className="relative h-48 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                >
                  <Image
                    src={src}
                    alt={`Campus Preview ${index + 1}`}
                    fill
                    sizes="(max-w-640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Gopalganj IT Park was established on 3rd December 2004 with the aim of spreading computer literacy and technical education in Gopalganj and nearby regions. At that time, access to quality computer education in small towns was very limited. Many students were unable to learn modern technology because of a lack of facilities, resources, and professional guidance.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Recognizing this challenge, GITP started its mission to bridge the digital gap and provide affordable, practical, and career-oriented computer education to local students. Through years of hard work, continuous improvement, and commitment toward quality education, GITP gradually became one of the trusted names in the field of computer learning and skill development.
              </p>
            </div>

            <div className="bg-blue-700 text-white p-8 rounded-3xl shadow-md flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold border-b border-blue-500 pb-2">Why Choose Us?</h3>
              <ul className="space-y-4 text-blue-50">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">✓</span>
                  <span>More than 20 years of educational experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">✓</span>
                  <span>Government-recognized courses (NIELIT & BSDM)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">✓</span>
                  <span>Modern computer lab facilities with individual access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">✓</span>
                  <span>Experienced faculty & supportive learning atmosphere</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-gray-100 mb-12">
            <div className="p-2">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">22+</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Years Excellence</p>
            </div>
            <div className="p-2">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">5000+</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Students Trained</p>
            </div>
            <div className="p-2">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">98%</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pass Rate</p>
            </div>
            <div className="p-2">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">100%</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Practical Focus</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our vision is to create a digitally empowered and skilled society where every student has access to quality computer education and modern technological opportunities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 font-medium">
                <li>• Promote digital literacy and technical awareness</li>
                <li>• Provide affordable and practical computer education</li>
                <li>• Develop skilled and confident youth</li>
                <li>• Help students become self-reliant and successful</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our mission is to reduce the digital divide across rural and semi-urban boundaries while fostering comprehensive skill cultivation paths.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 font-medium">
                <li>• Provide quality computer education for all backgrounds</li>
                <li>• Support government skill development initiatives</li>
                <li>• Prepare students for corporate and government jobs</li>
                <li>• Create a supportive and student-friendly environment</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-3">NIELIT Courses at GITP</h3>
              <p className="text-gray-600 leading-relaxed">
                Gopalganj IT Park provides important NIELIT-related computer education programs. NIELIT (National Institute of Electronics and Information Technology) is an autonomous scientific society under the Ministry of Electronics and Information Technology, Government of India.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">CCC (Course on Computer Concepts)</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A popular computer literacy program designed to provide basic computer knowledge, digital financial tools, and cyber security awareness. Highly beneficial for government job aspirants.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">O Level (Information Technology)</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A professional-level computer certification aligned at NSQF Level 5. It provides advanced technical knowledge in Python programming, web design, databases, and IoT systems.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Authorized BSDM KYP Center</h3>
              <p className="text-gray-600 leading-relaxed">
                Gopalganj IT Park is proud to be an Authorized BSDM KYP Center. We have been successfully providing KYP (Kushal Yuva Program) training for the last 5 years under the Bihar Skill Development Mission (BSDM). The program focuses on developing communication skills, computer literacy, and workplace readiness to improve youth employability.
              </p>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Modern Computer Lab Facility</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To bridge the digital gap, we provide a modern and fully equipped computer lab facility where students who do not own personal laptops or desktop systems can learn comfortably and confidently.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <h5 className="font-bold text-gray-800 mb-2">Individual Computer Access</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">Every student gets access to an individual computer system during practical sessions for hands-on learning.</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <h5 className="font-bold text-gray-800 mb-2">Internet Facility on Systems</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">All systems are connected to high-speed internet to teach modern online applications in real time.</p>
                </div>
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <h5 className="font-bold text-gray-800 mb-2">Headset Configuration</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">Equipped with headsets for digital language learning, communication practice, and audio-based drills.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Ready to Build Your Digital Future?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-sm md:text-base">
              With more than two decades of educational excellence, modern lab facilities, and government-certified programs, Gopalganj IT Park is here to guide you at every step.
            </p>
            <Link
              href="/#admission-form"
              className="inline-block bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white font-bold px-8 py-4 rounded-xl shadow-md shadow-orange-600/20"
            >
              Apply Online Admission Now
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}