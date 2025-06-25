// /components/sections/Services.tsx

import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Visual Design",
    desc: "We create posters, flyers, brochures, thumbnails, PPTs, Infographics and other visual assets that stand out with modern and impactful design.",
    icon: "/services/diamond.png",
  },
  {
    title: "UI/UX Design & Prototyping",
    desc: "Specialized in designing clean, user-focused web and landing pages using Figma. We craft seamless user experiences backed by thoughtful design research.",
    icon: "/services/prototype.png",
  },
  {
    title: "Web Design & Deployment",
    desc: "End-to-end website solutions — from design to full-stack development using Industry standard tools and practices. We bring your vision to life and make it live.",
    icon: "/services/web.png",
  },
  {
    title: "Creative Content & Branding",
    desc: "We write quotes, scripts, and social captions that connect with audiences. Whether it's for a post or a brand story, we craft content that resonates.",
    icon: "/services/write.png",
  },
]

const Services = () => {
  return (
    <>
      <div className="w-full bg-[var(--peach)] flex py-20 px-4 flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-start gap-y-3 py-20 self-stretch justify-evenly">
          <span className="text-[var(--cyan)] text-2xl font-semibold py-2 text-shadow-sm">
            Services We Provide
          </span>
          <span className="text-black text-4xl font-semibold py-2">
            Why Choose Us For Your{" "}
            <a className="text-[var(--cyan)]">Next Project?</a>
          </span>
          <span className="text-zinc-800 py-2 -mt-6">
            Our passion lies in creating meaningful digital experiences —
            blending creativity, user-focused design, and functional development
            to bring ideas to life.
          </span>
          <div className="w-full flex justify-center">
            <Link href="#contact">
              <button className="btn-shine hover:-translate-y-1 transition-transform duration-200 ease-out bg-[var(--cyan)] px-5 py-2 rounded-lg text-gray-100 font-semibold shadow-md mx-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center
        ${index === 3 ? "lg:col-start-2" : ""}`}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={50}
                height={50}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services
