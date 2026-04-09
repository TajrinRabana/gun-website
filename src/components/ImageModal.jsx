import { X } from 'lucide-react'

const ImageModal = ({ figure, onClose }) => {
  if (!figure) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4" onClick={onClose}>
      <div
        className="relative max-h-[95vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5 sm:p-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{figure.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{figure.caption}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100"
            aria-label="Close image preview"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-auto bg-slate-100 p-4 sm:p-6">
          <img src={figure.path} alt={figure.title} className="mx-auto w-full rounded-2xl bg-white object-contain" />
        </div>
      </div>
    </div>
  )
}

export default ImageModal
