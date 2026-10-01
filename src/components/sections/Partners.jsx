import { useState } from 'react'
import AppIcon from '../ui/AppIcon'
import { Diamond } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { brand, partners } from '../../data/app'

/**
 * Orbit diagram of partner marks around the brand, plus an accordion.
 * Partner names are invented; each mark is set as type, so no real logo is used.
 */
export default function Partners() {
  const [open, setOpen] = useState(0)
  const count = partners.logos.length

  return (
    <section className="section relative overflow-hidden">
      <Diamond className="right-[8%] top-[20%] h-5 w-5" />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Orbit */}
          <Reveal className="flex justify-center">
            <div className="relative h-[380px] w-[380px] sm:h-[420px] sm:w-[420px]">
              {/* Dashed orbit ring */}
              <span
                aria-hidden="true"
                className="absolute inset-8 animate-spinSlow rounded-full border-2 border-dashed border-ink/10"
              />

              {/* Centre brand */}
              <span className="absolute left-1/2 top-1/2 grid h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-grad text-white shadow-lift">
                <span className="font-display text-[26px] font-bold">{brand.wordmark}</span>
              </span>

              {/* Partner marks positioned around the ring */}
              {partners.logos.map((name, i) => {
                const angle = (i / count) * Math.PI * 2 - Math.PI / 2
                const radius = 44 // percent from centre
                const x = 50 + Math.cos(angle) * radius
                const y = 50 + Math.sin(angle) * radius
                return (
                  <span
                    key={name}
                    className="absolute grid h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white px-2 text-center shadow-card transition-transform duration-300 hover:scale-110"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <span className="font-display text-[13px] font-bold leading-tight text-ink/45">{name}</span>
                  </span>
                )
              })}
            </div>
          </Reveal>

          {/* Copy + accordion */}
          <div>
            <Reveal>
              <h2 className="sec-title">{partners.title}</h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-5">{partners.text}</p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {partners.accordion.map((item, i) => {
                const expanded = open === i
                return (
                  <Reveal key={item.q} delay={140 + i * 90}>
                    <div className={`overflow-hidden rounded-xl ${expanded ? 'shadow-card' : ''}`}>
                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpen(expanded ? -1 : i)}
                          aria-expanded={expanded}
                          className={`flex w-full items-center justify-between gap-5 px-6 py-4 text-left font-display text-[15px] font-semibold transition-colors duration-300 ${
                            expanded ? 'bg-brand-grad text-white' : 'bg-haze text-ink hover:text-brand'
                          }`}
                        >
                          {item.q}
                          <AppIcon
                            name={expanded ? 'eye' : 'plus'}
                            className="h-5 w-5 shrink-0"
                          />
                        </button>
                      </h3>
                      <div
                        className="grid bg-white transition-all duration-300"
                        style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 py-5 text-[15px]">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
