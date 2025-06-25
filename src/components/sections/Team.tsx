// /components/sections/Team.tsx

import Image from "next/image"

const avengers = [
  {
    name: "Haswanth Tamil",
    role: "Full-Stack developer and Founder",
    desc: "Haswanth leads the team with a strong passion for building end-to-end digital solutions. As a skilled Django full-stack developer, he brings both creative and technical expertise — turning ideas into fully functional, scalable web applications. From design to deployment, he ensures every project is delivered with precision and impact.",
    icon: "/pc_with_tag.png",
  },
  {
    name: "Arthi M",
    role: "Creative & UI/UX Designer",
    desc: "Arthi is a versatile designer with a passion for visual storytelling. She creates engaging posters, flyers, brochures, thumbnails, and brand content. She also designs clean, user-focused landing pages using Figma — helping brands communicate with clarity and creativity.",
    icon: "/brush.png",
  },
]

const Team = () => {
  return (
    <>
      <div className="w-full flex bg-[var(--pink)] flex-col py-10 relative overflow-hidden items-center sm:items-baseline">
        <h2 className="text-2xl font-semibold px-20">Our Team</h2>
        <div className="flex flex-col lg:flex-row gap-y-20 justify-center lg:justify-around w-full px-6 sm:px-20 py-10">
          {avengers.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl w-full lg:w-sm shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
            >
              <Image src={member.icon} alt="Icon" width={50} height={50} />
              <h3 className="text-xl font-semibold text-[var(--maroon)]">
                {member.name}
              </h3>
              <span className="font-semibold font-mono tracking-tighter text-lg">
                {member.role}
              </span>
              <p className="text-gray-600 text-sm py-5 mt-2">{member.desc}</p>
            </div>
          ))}
        </div>
        <div className="absolute right-0 translate-y-3/4">
          <Image src="/dots.png" alt="" width={50} height={50} />
        </div>
      </div>
    </>
  )
}

export default Team
