export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Gopalganj IT Park
          </h2>

          <p className="text-blue-100">
            Government-oriented computer training institute in Gopalganj.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Courses
          </h3>

          <ul className="space-y-2 text-blue-100">
            <li>CCC</li>
            <li>O Level</li>
            <li>KYP</li>
            <li>Basic Computer</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-blue-100">
            Yadavpur Road, Gopalganj, Bihar
          </p>

          <p className="text-blue-100 mt-2">
            +91 9876543210
          </p>
        </div>

      </div>

    </footer>
  )
}