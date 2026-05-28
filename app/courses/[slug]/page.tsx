import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const courseData: any = {
  ccc: {
    title: "NIELIT Course on Computer Concepts (CCC)",
    duration: "3 Months (Theory: 30 hrs + Practical: 60 hrs)",
    syllabus: [
      "Chapter 1: Introduction to Computer & Latest IT Gadgets",
      "Chapter 2: Introduction to Operating System (Ubuntu / Linux & Windows)",
      "Chapter 3: Word Processing (LibreOffice Writer / MS Word)",
      "Chapter 4: Spreadsheet Applications (LibreOffice Calc / MS Excel)",
      "Chapter 5: Presentation Layouts (LibreOffice Impress / MS PowerPoint)",
      "Chapter 6: Introduction to Internet, WWW, Protocols & Modes of Connectivity",
      "Chapter 7: E-mail, Social Networking, and e-Governance Services",
      "Chapter 8: Digital Financial Tools and Online Banking Applications",
      "Chapter 9: Overview of Cyber Security (Securing PC, Email, and Smart Phones)",
      "Chapter 10: Overview of FutureSkills and Artificial Intelligence (AI) Ecosystem",
    ],
    pdfLink: "/CCC_Syllabus.pdf"
  },

  "o-level": {
    title: "NIELIT 'O' Level (IT) Course",
    duration: "1 Year (520 Learning Hours)",
    syllabus: [
      "Module M1-R5: Information Technology Tools and Network Basics",
      "Module M2-R5: Web Designing & Publishing",
      "Module M3-R5: Programming and Problem Solving through Python",
      "Module M4-R5: Internet of Things and its Applications",
      "PR1-R5: Practical Based on Core Modules (M1-R5 to M4-R5)",
      "PJ1-R5: Institutional Project Evaluation Component",
    ],
    pdfLink: "/O_Level_syllabus.pdf"
  },

  kyp: {
    title: "Kushal Yuva Program (KYP)",
    duration: "3 Months (Eligibility: 10th Pass or ongoing Higher Education)",
    images: ["/kyp1.jpg", "/kyp2.jpg", "/kyp3.jpg"],
    syllabus: [
      "BS-CIT: Bihar State-Certificate in Information Technology (Become a Smart User of Computer)",
      "BS-CLS: Bihar State-Certificate in Language Skills (English & Hindi Speaking, Listening, Reading & Writing)",
      "BS-CSS: Bihar State-Certificate in Soft Skills (Soft Skills Training for Career Building & Workplace Ethics)",
    ],
    pdfLink: "/KYP_Syllabus.pdf"
  },
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = courseData[slug]

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-gray-500 font-medium">Course not found.</p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 tracking-tight mb-2">
                {course.title}
              </h1>
              <p className="text-gray-500 font-medium">
                Duration: {course.duration}
              </p>
            </div>

            {course.pdfLink && (
              <a
                href={course.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-6 py-3 rounded-xl border border-blue-200/50 transition whitespace-nowrap text-sm"
              >
                📄 View Detailed Syllabus PDF
              </a>
            )}
          </div>

          {slug === "kyp" && course.images && (
            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Training Modules</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {course.images.map((src: string, index: number) => (
                  <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow-sm border border-gray-100 p-2 hover:shadow-md transition-all duration-300">
                    <div className="relative w-full h-32 sm:h-28 md:h-32 overflow-hidden rounded-lg">
                      <Image
                        src={src}
                        alt={`KYP Module Graphic ${index + 1}`}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Course Curriculum Overview
          </h2>

          <div className="space-y-3.5 mb-10">
            {course.syllabus.map((item: string, index: number) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100/70 p-4 rounded-xl text-gray-700 font-medium flex items-center gap-3 text-sm md:text-base shadow-sm"
              >
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link 
            href="/#admission-form"
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-600/20 transition-all text-center inline-block"
          >
            Enroll in Course Now
          </Link>

        </div>
      </main>

      <Footer />
    </>
  )
}