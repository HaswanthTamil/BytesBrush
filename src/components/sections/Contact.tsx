// components/ContactSection.jsx

import Image from "next/image"
import Link from "next/link"
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const ContactSection = () => {
  return (
    <div className="bg-[var(--cyanlight)] w-full flex flex-col py-20 px-6">
      <div className="w-full flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-semibold">Let&#39;s Connect</h2>
        <p className="mt-2 text-zinc-600 max-w-md p-4">
          Whether you&#39;ve got a project, a question, or just wanna say hi—hit
          us up. We&#39;re always around.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full py-5 gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-y-4 w-full max-w-md">
          <div className="flex flex-row bg-white px-3 py-2 rounded-lg items-center">
            <Image src="/call.png" alt="" width={45} height={40} />
            <div className="flex flex-col p-2">
              <h3 className="text-zinc-600/60 -mb-1 text-sm">Call Us</h3>
              <span>+91 73393 12996</span>
            </div>
          </div>

          <Link href="mailto:haswanthkumar278@gmail.com">
            <div className="flex flex-row bg-white px-3 py-2 rounded-lg items-center overflow-hidden">
              <Image src="/mail.png" alt="" width={45} height={40} />
              <div className="flex flex-col p-2">
                <h3 className="text-zinc-600/60 -mb-1 text-sm">Write to Us</h3>
                <span>haswanthkumar278@gmail.com</span>
              </div>
            </div>
          </Link>

          <Link href="mailto:arthi5796@gmail.com">
            <div className="flex flex-row bg-white px-3 py-2 rounded-lg items-center overflow-hidden">
              <Image src="/mail.png" alt="" width={45} height={40} />
              <div className="flex flex-col p-2">
                <h3 className="text-zinc-600/60 -mb-1 text-sm">Write to Us</h3>
                <span>arthi5796@gmail.com</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-black font-bold text-2xl md:text-3xl">
            Follow Us On
          </div>
          <div className="flex flex-col gap-y-2 py-4 font-semibold">
            {[
              { icon: <FaLinkedin />, label: "BytesBrush" },
              { icon: <FaXTwitter />, label: "BytesBrush" },
              { icon: <FaInstagram />, label: "BytesBrush" },
              { icon: <FaDiscord />, label: "HiveHub" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-row items-center gap-3 px-4 py-2"
              >
                <button className="btn-shine rounded-full p-2 shadow-md bg-[var(--cyan)]">
                  {item.icon}
                </button>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
