// /components/sections/Qualities.tsx

const Qualities = () => {
  return (
    <>
      <div className="w-full flex flex-col py-10 px-20">
        <h2 className="text-[var(--cyan)] text-3xl font-bold py-2">
          What Sets Us Apart
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 py-2 text-sm sm:text-xl text-gray-700 font-medium">
          <span>Creative services</span>
          <span className="text-[var(--maroon)]">|</span>
          <span>Quality at work</span>
          <span className="text-[var(--maroon)]">|</span>
          <span>Affordable cost</span>
          <span className="text-[var(--maroon)]">|</span>
          <span>On-time delivery</span>
        </div>
      </div>
    </>
  )
}

export default Qualities
