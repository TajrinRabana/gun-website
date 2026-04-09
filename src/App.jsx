import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import HighlightCard from './components/HighlightCard'
import FigureCard from './components/FigureCard'
import ImageModal from './components/ImageModal'
import ManifestCard from './components/ManifestCard'
import Navbar from './components/Navbar'
import PolicyCard from './components/PolicyCard'
import SectionHeader from './components/SectionHeader'
import {
  changeGroups,
  findings,
  heatmapMapFigures,
  manifestItems,
  nationalTrendsFigures,
  objectives,
  overviewCards,
  policyCards,
  regionalFigures,
  stateComparisonFigures,
} from './data/siteData'

function App() {
  const [selectedFigure, setSelectedFigure] = useState(null)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedFigure(null)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />

      <main>
        <section id="overview" className="section-space">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Study overview"
              title="A descriptive digital dashboard for rapid academic review"
              description="The website is designed to help a quickly understand national patterns, state comparisons, regional variation, and careful policy-aligned interpretation from a state-level descriptive analysis of gun-related deaths and crude death rates."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {overviewCards.map((item) => (
                <div key={item.label} className="card-base p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-7 text-slate-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                eyebrow="Research objectives"
                title="What this capstone visualization is designed to show"
                description="Each objective is reflected through curated figures, grouped visuals, and short interpretation text to support clear academic presentation without overstating claims."
              />
            </div>
            <div className="card-base p-6 sm:p-8">
              <ul className="space-y-4">
                {objectives.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-sm leading-7 text-slate-700"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="findings" className="section-space soft-blue-section">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Key findings"
              title="Core patterns identified across the study"
              description="These summary points present the major descriptive findings highlighted throughout the digital dashboard."
              centered
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {findings.map((text, index) => (
                <HighlightCard key={text} text={text} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="national-trends" className="section-space bg-white">
          <div className="section-shell">
            <SectionHeader
              eyebrow="National trends"
              title="National pattern across total deaths and crude death rates"
              description="The following figures show how gun-related deaths and national crude death rates changed across the United States from 2000 to 2019."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {nationalTrendsFigures.map((figure) => (
                <FigureCard
                  key={figure.id}
                  figure={figure}
                  onOpen={setSelectedFigure}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="state-comparison" className="section-space">
          <div className="section-shell">
            <SectionHeader
              eyebrow="State comparison"
              title="Long-term state differences in crude death rates"
              description="High-rate states were concentrated mainly in the South and parts of the West, while many low-rate states were concentrated in the Northeast."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {stateComparisonFigures.map((figure) => (
                <FigureCard
                  key={figure.id}
                  figure={figure}
                  onOpen={setSelectedFigure}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="changes-over-time" className="section-space bg-white">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Change over time"
              title="Where rates and totals increased or decreased most clearly"
              description="The figures in this section compare direction, magnitude, and start-versus-end-year differences across states."
            />

            <div className="space-y-10">
              {changeGroups.map((group) => (
                <div key={group.label}>
                  <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">
                    {group.label}
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {group.figures.map((figure) => (
                      <FigureCard
                        key={figure.id}
                        figure={figure}
                        onOpen={setSelectedFigure}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="maps-heatmaps" className="section-space">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Heatmaps and geography"
              title="State-level concentration and spatial pattern"
              description="These visualizations show that gun-related death patterns were not evenly distributed across states and remained substantially different over time."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {heatmapMapFigures.map((figure) => (
                <FigureCard
                  key={figure.id}
                  figure={figure}
                  onOpen={setSelectedFigure}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="regional-analysis" className="section-space soft-blue-section">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Regional analysis"
              title="Regional contrasts in counts, rates, and trends"
              description="The South showed the highest overall level of gun-related deaths and crude death rates, while the Northeast remained the lowest-rate region."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {regionalFigures.map((figure) => (
                <FigureCard
                  key={figure.id}
                  figure={figure}
                  onOpen={setSelectedFigure}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="policy-interpretation"
          className="section-space soft-amber-section"
        >
          <div className="section-shell">
            <SectionHeader
              eyebrow="Policy interpretation"
              title="Descriptive alignment with broader policy research"
              description="The descriptive patterns shown in this project align with broader policy research suggesting that stricter firearm policy frameworks are often associated with lower rates of gun-related deaths, while more permissive policy may be associated with higher rates."
            />

            <div className="mb-8 card-base border-amber-200 p-6 sm:p-8">
              <p className="text-sm leading-8 text-slate-700">
                This website does not present causal proof. The policy discussion
                is included as careful descriptive interpretation that aligns
                observed differences with the broader literature on firearm policy.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {policyCards.map((card) => (
                <PolicyCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section id="digital-manifest" className="section-space soft-teal-section">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Digital manifest"
              title="Project build and deployment profile"
              description="This section summarizes the structure of the digital component and provides placeholders for repository and deployment links."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {manifestItems.map((item) => (
                <ManifestCard
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="card-base border-teal-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-900">
                  GitHub repository link
                </p>
                <div className="mt-4 rounded-2xl border border-dashed border-teal-200 bg-white/70 p-6 text-sm text-slate-600">
                  <a
                    href="https://github.com/TajrinRabana/An-Analysis-of-the-Impact-of-Gun-Control-Policies-on-Gun-Violence-in-the-United-States"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-teal-800 underline underline-offset-4 hover:text-teal-950"
                  >
                    Click Here for GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="section-shell">
            <SectionHeader
              eyebrow="About the project"
              title="Supporting the capstone white paper through visual evidence"
              description="This website supports a capstone white paper by presenting visual evidence from a descriptive state-level analysis of gun-related deaths in the United States. It is designed as a clean academic interface for presentation, review, and discussion."
            />
          </div>
        </section>
      </main>

      <Footer />
      <ImageModal
        figure={selectedFigure}
        onClose={() => setSelectedFigure(null)}
      />
    </div>
  )
}

export default App