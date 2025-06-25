// components/QuoteSection.jsx

type QuoteSectionProps = {
  quote: string
  author?: string
}

const QuoteSection = ({ quote, author }: QuoteSectionProps) => {
  return (
    <section className="bg-white w-full py-16 px-6 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-mono">
          {`“${quote}”`}
        </p>
        <span className="block mt-4 text-zinc-500 font-medium">
          — {author || "Unknown"}
        </span>
      </div>
    </section>
  )
}

export default QuoteSection
