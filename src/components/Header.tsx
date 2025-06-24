// /components/Header.tsx

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--peach)] shadow-md font-mono">
      <div className="flex justify-between items-center px-5">
        {/* Logo */}
        <Link href="#lander">
          <div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
            <Image src="/logo.png" alt="BytesBrush" width={50} height={50} />
            <h1 className="font-semibold text-2xl -mt-2">BytesBrush</h1>
          </div>
        </Link>

        {/* Hamburger - mobile only */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-7 text-[var(--maroon)]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative overflow-hidden"
            >
              <span className="inline-block transition-transform group-hover:-translate-y-1">
                {label}
              </span>
              <span
                className="absolute left-0 bottom-0 w-0 bg-current transition-all duration-300 group-hover:w-full rounded-full"
                style={{ height: "0.10rem" }}
              />
            </Link>
          ))}
        </nav>
      </div>

      {/* Glassy tiles - mobile only */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-wrap justify-center gap-4 px-4 py-6 md:hidden bg-transparent"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ href, label }) => (
              <motion.div
                key={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-md bg-white/20 rounded-full px-5 py-3 text-white text-sm shadow-lg border border-white/30 transition-all"
              >
                <Link href={href} onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
