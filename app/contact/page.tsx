import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-700 mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Have questions about fees, batch timings, or syllabus? Reach out to us.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            
            {/* Left Column: Contact Details (Takes 2 columns) */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-8">
                
                <div>
                  <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                    Our Campus Address
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    Yadavpur Road, Gopalganj, Bihar
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Opposite Government ITI ground area.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                    Call or WhatsApp
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    +91 9876543210 , +91 9661520001 
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Mon - Sat: 8:00 AM to 6:00 PM
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                    Email Support
                  </h3>
                  <p className="text-lg font-semibold text-gray-800">
                    gopalganjitpark@gmail.com
                  </p>
                </div>

              </div>

              {/* Quick Map Placeholder/Notice */}
              <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-md text-center">
                <p className="font-semibold">📍 Walk-in counseling is open!</p>
                <p className="text-sm opacity-90 mt-1">Visit our campus for a free career demo class.</p>
              </div>
            </div>

            {/* Right Column: Dynamic Contact Enquiry Form (Takes 3 columns) */}
            <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send a Message
              </h2>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Shyam Kumar" 
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX" 
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@gmail.com" 
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message or Query</label>
                  <textarea 
                    rows={4} 
                    placeholder="Type your message here..." 
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800 transition text-white py-4 rounded-xl font-semibold shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}