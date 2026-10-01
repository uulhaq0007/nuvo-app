import PhoneFrame from '../ui/PhoneFrame'
import { InsightsScreen } from '../ui/AppScreens'
import { Diamond, Triangle } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { solution } from '../../data/app'

/** Store badges drawn as markup rather than using platform logo artwork. */
function StoreBadge({ store, filled = false }) {
  const label = store === 'ios' ? 'App Store' : 'Google Play'
  return (
    <a
      href="#pricing"
      onClick={(e) => {
        e.preventDefault()
        document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
      className={`inline-flex items-center gap-3 rounded-xl px-6 py-3.5 transition-all duration-300 hover:-translate-y-1 ${
        filled ? 'bg-brand-grad text-white shadow-lift' : 'border border-ink/10 bg-white text-ink shadow-card hover:border-brand'
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden="true">
        {store === 'ios' ? (
          <path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 1.9-1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.4-.1 0-2.2-.9-2.2-3.4zM14.3 6.3c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.7 1 .1 2-.5 2.6-1.3z" />
        ) : (
          <path d="M4.3 2.9c-.2.2-.3.6-.3 1v16.2c0 .4.1.7.3 1l8.8-9.1zm10 7 2.5-2.6L6.6 2c-.3-.2-.6-.2-.9-.1zm3.7 1.2 2.4 1.4c.6.4.6 1.3 0 1.6l-2.5 1.5-2.7-2.8zm-1.2 4.6-2.5-2.6-8.6 8.9c.3.1.6.1.9-.1z" />
        )}
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[11px] opacity-80">Download on</span>
        <span className="block font-display text-[15px] font-semibold">{label}</span>
      </span>
    </a>
  )
}

export default function Solution() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <Triangle className="right-[6%] top-[30%] h-7 w-7" />
      <Diamond className="right-[38%] top-[12%] h-5 w-5" />

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Device on a blob */}
          <Reveal className="relative flex justify-center">
            <div
              aria-hidden="true"
              className="blob absolute left-1/2 top-1/2 h-[420px] w-[440px] -translate-x-1/2 -translate-y-1/2 animate-blobMorph opacity-90"
            />
            <PhoneFrame className="relative h-[520px] w-[258px] -rotate-[7deg]">
              <InsightsScreen />
            </PhoneFrame>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <h2 className="sec-title">{solution.title}</h2>
            </Reveal>

            {solution.paras.map((p, i) => (
              <Reveal key={i} delay={90 + i * 80}>
                <p className="mt-5">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={260}>
              <dl className="mt-9 grid grid-cols-3 gap-4 border-y border-ink/10 py-6">
                {solution.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block font-display text-[26px] font-bold text-grad">{s.value}</span>
                      <span className="block text-[13px]">{s.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-8 flex flex-wrap gap-4">
                <StoreBadge store="ios" filled />
                <StoreBadge store="android" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
