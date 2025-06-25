// /app/page.tsx

import Lander from "@/components/sections/Lander"
import Qualities from "@/components/sections/Qualities"
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
        <section id="team">
          <Team />
        </section>
      </div>
    </>
  )
}
