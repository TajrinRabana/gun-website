import { Expand } from 'lucide-react'

const FigureCard = ({ figure, onOpen }) => {
  return (
    <article className="card-base group overflow-hidden">
      <button
        type="button"
        onClick={() => onOpen(figure)}
        className="block w-full text-left"
      >
        <div className="relative overflow-hidden border-b border-slate-200 bg-slate-100">
          <img
            src={figure.path}
            alt={figure.title}
            className="h-72 w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow">
            <Expand size={14} />
            Click to enlarge
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-semibold leading-7 text-slate-900">{figure.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{figure.caption}</p>
        </div>
      </button>
    </article>
  )
}

export default FigureCard
