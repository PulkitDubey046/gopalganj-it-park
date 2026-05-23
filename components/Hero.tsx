export default function Hero() {
  return (
    <section className="bg-blue-700 text-white py-24 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Government Recognized
          <br />
          Computer Training Institute
        </h1>

        <p className="text-lg md:text-xl mb-8 text-blue-100">
          CCC • O Level • KYP • Basic Computer Training
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold">
            Apply Online
          </button>

          <button className="bg-white text-blue-700 hover:bg-gray-100 transition px-8 py-4 rounded-xl font-semibold">
            Call Now
          </button>

        </div>

      </div>

    </section>
  )
}