// /components/Header/tsx

import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[var(--peach)] flex flex-row items-center justify-between shadow-xs font-mono">
        <Link href="/">
          <div className="flex flex-row items-center px-5 py-1 gap-3 hover:translate-x-3 transition-all duration-300 ease-out">
            <Image src="/logo.png" alt="BytesBrush" width={50} height={50} />
            <h1 className="font-semibold text-2xl -mt-2">BytesBrush</h1>
          </div>
        </Link>
        <div className="flex flex-row items-center gap-7 py-1 px-15">
          {[
            { href: "/about", label: "About" },
            { href: "/team", label: "Team" },
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/contact", label: "Contact Us" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative group overflow-hidden"
            >
              <span className="inline-block transition-transform duration-200 group-hover:-translate-y-1">
                {label}
              </span>
              <span
                className="absolute left-0 bottom-0 w-0 bg-current transition-all duration-300 group-hover:w-full rounded-full"
                style={{ height: "0.10rem" }}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
