const ManifestCard = ({ label, value }) => {
  return (
    <div className="card-base p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 text-sm font-medium leading-7 text-slate-800">{value}</p>
    </div>
  )
}

export default ManifestCard
