const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-blue-50 to-teal-50"
    >
      <div className="section-shell section-space grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-5xl">
            An Analysis of the Impact of Gun Control Policies on Gun Violence in
            the United States: A State-Level Firearm Mortality Analysis
          </h1>

          <p className="mt-4 text-lg font-semibold text-slate-700">
            A digital visualization component for a capstone white paper
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
            This website presents the digital visualization component of a
            capstone white paper examining gun-related death patterns in the
            United States from 2000 to 2019 using a state-level descriptive
            framework.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#national-trends" className="btn-primary">
              Explore Visualizations
            </a>
            <a href="#findings" className="btn-secondary">
              Key Findings
            </a>
          </div>

          <div className="mt-10 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
            <div className="card-base border-t-4 border-blue-500 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Author
              </p>
              <p className="mt-2 font-semibold text-slate-800">Rabana Tajrin</p>
            </div>

            <div className="card-base border-t-4 border-teal-500 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Institution
              </p>
              <p className="mt-2 font-semibold text-slate-800">
                CUNY Graduate center
              </p>
            </div>

            <div className="card-base border-t-4 border-amber-500 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Advisor
              </p>
              <p className="mt-2 font-semibold text-slate-800">
                Howard Everson
              </p>
            </div>
          </div>
        </div>

        <div className="card-base border border-blue-100 bg-white/90 p-6 shadow-md sm:p-8">
          <span className="badge-blue">Study Overview</span>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-bold text-slate-900">Study framing</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Descriptive state-level analysis covering 2000–2019 with
                emphasis on trends, comparison, regional variation, and careful
                policy interpretation.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Display approach
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Static figure-based academic dashboard using existing visuals
                only, with no generated charts, backend, database, or external
                API calls.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Interpretation note
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Policy discussion is presented as descriptive alignment with
                existing literature and not as causal proof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection