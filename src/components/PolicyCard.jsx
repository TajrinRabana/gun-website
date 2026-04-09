const PolicyCard = ({ title, states, policyTypes }) => {
  return (
    <div className="card-base h-full p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">States highlighted</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {states.map((state) => (
            <span
              key={state}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
            >
              {state}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">Policy profile elements</p>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
          {policyTypes.map((policy) => (
            <li key={policy} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
              <span>{policy}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PolicyCard
