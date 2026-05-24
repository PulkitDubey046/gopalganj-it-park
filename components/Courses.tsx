"use client"

import Link from "next/link"

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

export default function Courses() {
  const handleEnrollClick = (courseTitle: string) => {
    // 1. Locate the HTML select dropdown menu inside your AdmissionForm component
    const selectDropdown = document.getElementById("course-select") as HTMLSelectElement | null
    
    if (selectDropdown) {
      // 2. Automatically change its value to match the selected course card
      selectDropdown.value = courseTitle
      
      // Dispatch a change event so React registers the new value in the form state
      selectDropdown.dispatchEvent(new Event("change", { bubbles: true }))
    }

    // 3. Smoothly scroll the page down to the admission form section
    const formElement = document.getElementById("admission-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-gray-100 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Our Courses
          </h2>
          <p className="text-gray-600">
            Professional computer education programs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.slug}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl font-bold mb-3 text-blue-700">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Duration: {course.duration}
                </p>
                <p className="text-gray-700 mb-6">
                  {course.description}
                </p>
              </div>

              <div className="flex gap-3 mt-auto">
                <Link
                  href={`/courses/${course.slug}`}
                  className="bg-blue-700 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-800 transition text-center flex-1"
                >
                  Read More
                </Link>

                <button 
                  onClick={() => handleEnrollClick(course.title)}
                  className="bg-orange-500 text-white px-5 py-3 rounded-xl font-medium hover:bg-orange-600 transition flex-1"
                >
                  Enroll Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}