import { useState } from 'react'
import AppIcon from '../ui/AppIcon'
import { Ring } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { pricing } from '../../data/app'

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="section relative overflow-hidden">
      <Ring className="right-[12%] top-[26%] h-6 w-6" />

      <div className="container relative">
        <div className="text-center">
          <Reveal>
            <h2 className="sec-title">Simple, Honest Pricing</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="sec-lead">
              Start free and stay free if that is all you need. Paid plans unlock more accounts and shared budgets —
              cancel any time, in the app, in two taps.
            </p>
          </Reveal>
        </div>

        {/* Billing toggle */}
        <Reveal delay={150}>
          <div className="mt-9 flex items-center justify-center gap-4">
            <span className={`font-display text-[15px] font-medium ${!annual ? 'text-ink' : 'text-body'}`}>Monthly</span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
              onClick={() => setAnnual((v) => !v)}
              className={`relative h-8 w-[64px] rounded-full transition-colors duration-300 ${
                annual ? 'bg-brand-grad' : 'bg-ink/15'
              }`}
            >
              <span
                className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ${
                  annual ? 'translate-x-[34px]' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-display text-[15px] font-medium ${annual ? 'text-ink' : 'text-body'}`}>
              Annual <span className="text-brand">(save 20%)</span>
            </span>
          </div>
        </Reveal>

        {/* Plans */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.map((p, i) => {
            const price = annual ? p.annual : p.monthly
            const period = annual ? 'year' : 'month'

            return (
              <Reveal key={p.name} delay={i * 110} className="h-full">
                <article
                  className={`group relative flex h-full flex-col rounded-2xl bg-white p-7 text-center transition-all duration-500 hover:-translate-y-2 ${
                    p.popular ? 'shadow-lift ring-2 ring-brand' : 'shadow-card hover:shadow-soft'
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-grad px-5 py-1 text-[12px] font-semibold text-white">
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-display text-[21px] font-bold text-grape">{p.name}</h3>

                  <p className="mt-4 flex items-start justify-center gap-1">
                    <span className="mt-2 font-display text-[20px] font-bold text-brand">$</span>
                    <span className="font-display text-[46px] font-bold leading-none text-brand">{price}</span>
                    <span className="mt-auto pb-1.5 text-[14px] text-body">/ {period}</span>
                  </p>

                  <p className="mt-3 min-h-[48px] text-[14px]">{p.blurb}</p>

                  <ul className="my-6 space-y-3 border-t border-ink/10 pt-6 text-left">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14px]">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                          <AppIcon name="check" className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className={`mt-auto rounded-full px-7 py-3 font-display text-[14px] font-semibold uppercase tracking-wide transition-all duration-300 ${
                      p.popular
                        ? 'bg-brand-grad text-white hover:bg-brand-grad-r'
                        : 'bg-haze text-ink hover:bg-brand-grad hover:text-white'
                    }`}
                  >
                    {price === 0 ? 'Start Free' : 'Choose Plan'}
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
