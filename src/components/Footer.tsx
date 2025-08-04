// /components/Footer.tsx

import { FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="bg-black text-white px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold">BytesBrush</h2>
        <p className="text-sm text-gray-400 mt-1">
          Painting the web with code and creativity.
        </p>
      </div>

      <div className="flex gap-5 text-xl">
        <a
          href="tel:+7339312996"
          aria-label="Phone"
          className="hover:text-cyan-400 transition"
        >
          <FaPhone />
        </a>
        <a
          href="https://www.instagram.com/bytesbrush/"
          aria-label="Instagram"
          className="hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:haswanthtamilofficial@gmail.com"
          aria-label="Mail"
          className="hover:text-indigo-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="text-sm text-gray-500 text-center md:text-right">
        &copy; {new Date().getFullYear()} BytesBrush. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
