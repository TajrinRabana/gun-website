const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-shell py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-navy">
              An Analysis of the Impact of Gun Control Policies on Gun Violence in the United States
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Academic project · Rabana Tajrin · 2026
            </p>
          </div>

          <div className="text-sm text-slate-600">
            GitHub:{' '}
            <a
              href="https://github.com/TajrinRabana/An-Analysis-of-the-Impact-of-Gun-Control-Policies-on-Gun-Violence-in-the-United-States"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
            >
              View Repository
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer