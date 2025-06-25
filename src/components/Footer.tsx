// /components/Footer.tsx

import { FaLinkedin, FaInstagram, FaDiscord, FaXTwitter } from "react-icons/fa6"

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
          href="#"
          aria-label="LinkedIn"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          aria-label="Discord"
          className="hover:text-indigo-400 transition"
        >
          <FaDiscord />
        </a>
        <a
          href="#"
          aria-label="Twitter / X"
          className="hover:text-gray-400 transition"
        >
          <FaXTwitter />
        </a>
      </div>

      <div className="text-sm text-gray-500 text-center md:text-right">
        &copy; {new Date().getFullYear()} BytesBrush. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
