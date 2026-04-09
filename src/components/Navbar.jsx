import { Menu } from 'lucide-react'
import { navLinks } from '../data/siteData'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <div></div>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#findings"
          className="hidden rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-base font-bold text-blue-900 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-100 sm:inline-flex"
        >
          Review Findings
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-blue-50 lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}

export default Navbar