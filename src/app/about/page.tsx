// /app/about/page.tsx

import Image from "next/image"

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="w-full px-4 pt-14 pb-4 md:pb-10 bg-[var(--cyan)] text-white text-shadow-2xs text-3xl font-bold">
          About Us
        </h2>
        <div className="w-full flex flex-col bg-[var(--peach)] px-4 py-6">
          <h2 className="text-2xl font-semibold py-2 font-mono">Our Mission</h2>
          <div className="flex flex-col-reverse sm:flex-row items-center sm:items-stretch gap-x-10 py-5">
            <div className="h-[300px] w-[300px] shrink-0">
              <Image
                src="/about_img1.png"
                alt=""
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-around max-w-lg h-[300px] gap-y-3 my-4 sm:my-0">
              <span>
                Design with intent. Develop with passion.We&#39;re here to
                bridge the gap between creativity and functionality. Our mission
                is to deliver visually compelling and technically sound digital
                assets that help individuals, creators, and startups stand out —
                whether that&#39;s through stunning presentations, eye-catching
                posters, or dynamic landing pages.
              </span>
              <span className="text-3xl font-semibold text-[var(--cyan)] text-shadow-2xs">
                We don&#39;t just complete tasks — we elevate your ideas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
