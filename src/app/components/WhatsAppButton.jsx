import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton () {
  return (
   <a
  href="https://wa.me/8801710833201"
  className="right-5 bottom-5 z-50 fixed bg-green-500 hover:bg-green-600 shadow-lg p-3 rounded-full text-white transition"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="w-9 h-9" />
</a>

  )
}
