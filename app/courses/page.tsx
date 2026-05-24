import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Using the same course database configuration matching your main page registry
const courses = [
  {
    title: "CCC",
    slug: "ccc",
    duration: "3 Months",
    description:
      "Basic computer literacy course for students and government job aspirants.",
  },
  {
    title: "O Level",
    slug: "o-level",
    duration: "1 Year",
    description:
      "Advanced IT certification course with programming and web designing.",
  },
  {
    title: "KYP",
    slug: "kyp",
    duration: "6 Months",
    description:
      "Skill development program for communication and digital training.",
  },
]

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-blue-700">
              Our Courses
            </h1>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Choose a course to explore its full syllabus and admission details.
            </p>
          </div>

          {/* Grid Layout of Course Offerings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-3 text-blue-700">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4 font-medium">
                    Duration: {course.duration}
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Clear Click Action linking to app/courses/[slug]/page.tsx */}
                <Link
                  href={`/courses/${course.slug}`}
                  className="w-full bg-blue-700 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-800 transition shadow-sm block"
                >
                  View Details & Syllabus
                </Link>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}