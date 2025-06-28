// /app/about/page.tsx

import Image from "next/image"
import Link from "next/link"

const h2class = "text-2xl font-semibold py-2 font-mono"
const sectionClass =
  "w-full flex flex-col bg-[var(--peach)] px-4 py-6 border-b-2 border-orange-300"
const mainDivClass =
  "flex flex-col-reverse sm:flex-row items-center sm:items-stretch gap-x-10 py-5"

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="w-full px-4 pt-14 pb-4 bg-[var(--cyan)] text-white text-shadow-2xs text-3xl font-bold">
          About Us
        </h1>
        <section id="Mission" className={sectionClass}>
          <h2 className={h2class}>Our Mission</h2>
          <div className={mainDivClass}>
            <div className="h-[300px] w-[300px] shadow-md shrink-0">
              <Image
                src="/about_img1.png"
                alt=""
                width={300}
                height={300}
                className="h-full w-full shadow-md object-cover"
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
        </section>
        <section id="Wokrflow" className={sectionClass}>
          <h2 className={h2class}>Our Workflow</h2>
          <div className={mainDivClass}>
            <div className="max-w-lg flex flex-col justify-around  gap-y-3 my-4 sm:my-0">
              <span>
                We start by understanding your vision. Then we turn it into a
                plan, with clear steps, frequent updates, and collaborative
                reviews.Here&#39;s our simple, no-fluff process: <br />
                <br />
                <a className="font-semibold">Listen</a> - We understand your
                goal and gather references. <br />
                <a className="font-semibold">Create</a> - Designs are
                handcrafted — no templates, no shortcuts. <br />
                <a className="font-semibold">Polish</a> - We fine-tune every
                detail until it&#39;s pixel perfect. <br />
                <a className="font-semibold">Deliver</a> - Final assets are
                clean, optimized, and ready to use.
              </span>
              <span className="text-3xl font-semibold text-[var(--cyan)] text-shadow-2xs">
                Our team blends design thinking with developer discipline,
                ensuring every pixel and every line of code adds value.
              </span>
            </div>
            <div className="h-[400px] flex flex-col gap-y-3 justify-center">
              <div className="h-[300px] w-[300px] shadow-md shrink-0">
                <Image
                  src="/about_img2.png"
                  alt=""
                  width={300}
                  height={300}
                  className="h-full w-full shadow-md"
                />
              </div>
              <span className="font-bold font-serif">
                Personal Touch.
                <br />
                Professional Outcome.
              </span>
            </div>
          </div>
        </section>
        <section id="CTA" className={sectionClass}>
          <h2 className={h2class}>Let&#39;s Create Together</h2>
          <div className={mainDivClass}>
            <div className="h-[300px] w-[300px] shadow-md shrink-0">
              <Image
                src="/ContactDetails.png"
                alt=""
                width={300}
                height={300}
                className="h-full w-full shadow-md object-cover"
              />
            </div>

            <div className="flex flex-col justify-around max-w-lg h-[300px] gap-y-3 my-4 sm:my-0">
              <span className="text-3xl font-bold">
                Ready to turn your idea into a{" "}
                <a className="text-[var(--cyan)]">scroll-stopping design</a> or
                a clean,{" "}
                <a className="text-[var(--cyan)]">responsive webpage?</a>
              </span>
              <span className="text-shadow-2xs">
                Whether you&#39;re a startup founder, student, or digital
                creator, we&#39;re here to help you make a great first
                impression.
              </span>
              <Link href="/#contact" className="mx-auto">
                <button className="btn-shine hover:-translate-y-1 transition-transform duration-200 ease-out bg-[var(--cyan)] px-5 py-2 rounded-lg text-white font-semibold shadow-md">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
