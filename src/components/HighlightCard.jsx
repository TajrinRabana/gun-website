const HighlightCard = ({ text, index }) => {
  return (
    <div className="card-base p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
        Key finding {String(index + 1).padStart(2, '0')}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-700">{text}</p>
    </div>
  )
}

export default HighlightCard
