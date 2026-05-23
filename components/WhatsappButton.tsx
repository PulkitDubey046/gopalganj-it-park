import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919661520001?text=Hello%20Gopalganj%20IT%20Park!%20I%20would%20like%20to%20inquire%20about%20your%20courses."
      target="_blank"
      className="
        fixed
        bottom-5
        right-5
        bg-green-500
        hover:bg-green-600
        transition
        text-white
        p-4
        rounded-full
        text-3xl
        shadow-lg
        z-50
      "
    >
      <FaWhatsapp />
    </a>
  )
}