import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Courses from "@/components/Courses"
import AboutSection from "@/components/AboutSection"
import StatsSection from "@/components/StatsSection" 
import AdmissionForm from "@/components/AdmissionForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <AboutSection />

      <StatsSection /> 

      <Courses />
      
      <AdmissionForm />

      <Footer />
    </main>
  )
}