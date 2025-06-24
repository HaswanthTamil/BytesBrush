// /app/page.tsx

import Lander from "@/components/sections/Lander"
import Qualities from "@/components/sections/Qualities"

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
      </div>
    </>
  )
}
