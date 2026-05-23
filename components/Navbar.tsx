import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-blue-700">
          Gopalganj IT Park
        </h1>

        <div className="flex items-center gap-6 font-medium">
          <Link href="/">Home</Link>

          <Link href="/courses">
            Courses
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  )
}