// /app/page.tsx

import QuoteSection from "@/components/QuoteSection"
import Contact from "@/components/sections/Contact"
import Lander from "@/components/sections/Lander"
import Qualities from "@/components/sections/Qualities"
import Services from "@/components/sections/Services"
import Team from "@/components/sections/Team"

export default function Home() {
  return (
    <>
      <div>
        <section id="lander">
          <Lander />
        </section>
        <section id="qualities">
          <Qualities />
        </section>
        <section id="team" className="scroll-mt-10">
          <Team />
        </section>
        <QuoteSection
          quote="Simplicity is the ultimate sophistication."
          author="Leonardo da Vinci"
        />
        <section id="services">
          <Services />
        </section>
        <QuoteSection
          quote="Programs must be written for people to read."
          author="Harold Abelson"
        />
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  )
}
