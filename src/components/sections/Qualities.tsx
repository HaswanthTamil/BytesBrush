// /components/sections/Qualities.tsx

const Qualities = () => {
  return (
    <>
      <div className="w-full flex flex-col py-10 px-20">
        <h2 className="text-[var(--cyan)] text-3xl font-bold py-2 text-center sm:text-left">
          What Sets Us Apart
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm sm:text-xl text-gray-700 font-medium text-center font-mono">
          <span>Creative services</span>
          <span className="hidden sm:inline text-[var(--maroon)]">|</span>
          <span>Quality at work</span>
          <span className="hidden sm:inline text-[var(--maroon)]">|</span>
          <span>Affordable cost</span>
          <span className="hidden sm:inline text-[var(--maroon)]">|</span>
          <span>On-time delivery</span>
        </div>
      </div>
    </>
  )
}

export default Qualities
