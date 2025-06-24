// /app/page.tsx

import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="bg-[var(--peach)] w-full min-h-screen px-4 py-12 flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-10 text-center md:text-left">
        <div className="max-w-md flex flex-col items-center md:items-start">
          <h2
            className="text-4xl sm:text-5xl font-semibold"
            style={{ textShadow: "2px 2px 1px rgba(0,0,0,0.3)" }}
          >
            We deliver <span className="text-[var(--cyan)]">exactly</span> what
            you need
          </h2>
          <p className="font-thin mt-5 text-sm sm:text-base">
            We&#39;re a team of passionate creatives—designers, developers, and
            storytellers—dedicated to turning ideas into meaningful digital
            solutions.
            <br />
            From stunning websites to eye-catching visuals and compelling
            content, we help brands grow, connect, and stand out.
          </p>
          <div className="flex flex-col sm:flex-row w-full justify-center items-center md:justify-around gap-3 mt-5">
            <button className="btn-shine hover:-translate-y-1 transition-transform duration-200 ease-out bg-[var(--cyan)] px-5 py-2 rounded-lg text-white font-semibold shadow-md">
              Contact Us
            </button>
            <button className="btn-shine hover:-translate-y-1 transition-transform duration-200 ease-out bg-[var(--cyan)] px-5 py-2 rounded-lg text-white font-semibold shadow-md">
              View Our Services
            </button>
          </div>
        </div>

        <div className="w-[80%] md:w-[30%] max-w-xs sm:max-w-sm md:max-w-md">
          <Image
            src="/home_image.png"
            alt="home_image"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  )
}
