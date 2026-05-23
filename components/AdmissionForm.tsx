export default function AdmissionForm() {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold mb-4">
            Online Admission
          </h2>

          <p className="text-gray-600">
            Fill out the form to enroll in your preferred course
          </p>

        </div>

        <form className="space-y-6 bg-gray-100 p-8 rounded-2xl shadow-md">

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Mobile Number
            </label>

            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Select Course
            </label>

            <select
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>CCC</option>

              <option>O Level</option>

              <option>KYP</option>

              <option>Basic Computer</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Address
            </label>

            <textarea
              placeholder="Enter your address"
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 transition text-white py-4 rounded-xl font-semibold"
          >
            Submit Admission
          </button>

        </form>

      </div>

    </section>
  )
}