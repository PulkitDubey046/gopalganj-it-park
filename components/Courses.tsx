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
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >

              <h3 className="text-3xl font-bold mb-3 text-blue-700">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Duration: {course.duration}
              </p>

              <p className="text-gray-700 mb-6">
                {course.description}
              </p>

              <div className="flex gap-3">

                <Link
                  href={`/courses/${course.slug}`}
                  className="bg-blue-700 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-800 transition"
                >
                  Read More
                </Link>

                <button className="bg-orange-500 text-white px-5 py-3 rounded-xl font-medium hover:bg-orange-600 transition">
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