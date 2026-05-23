const courseData: any = {
  ccc: {
    title: "CCC Course",
    duration: "3 Months",

    syllabus: [
      "Introduction to Computers",
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
      "Internet & Email",
      "Digital Payments",
      "Cyber Security",
    ],
  },

  "o-level": {
    title: "O Level",

    duration: "1 Year",

    syllabus: [
      "Programming in Python",
      "Web Designing",
      "Database Management",
      "Internet Technology",
      "Networking",
      "Project Work",
    ],
  },

  kyp: {
    title: "KYP Program",

    duration: "6 Months",

    syllabus: [
      "Communication Skills",
      "Basic Computer",
      "Soft Skills",
      "Digital Literacy",
      "Personality Development",
    ],
  },
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const course = courseData[slug]

  return (
    <main className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          {course.title}
        </h1>

        <p className="text-gray-500 mb-8">
          Duration: {course.duration}
        </p>

        <h2 className="text-3xl font-bold mb-6">
          Full Syllabus
        </h2>

        <div className="space-y-4 mb-10">

          {course.syllabus.map(
            (item: string, index: number) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-xl"
              >
                {item}
              </div>
            )
          )}

        </div>

        <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold">
          Enroll Now
        </button>

      </div>

    </main>
  )
}