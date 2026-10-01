import AppIcon from '../ui/AppIcon'
import PhoneFrame from '../ui/PhoneFrame'
import { SplitScreen } from '../ui/AppScreens'
import { Dot, Ring } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { steps } from '../../data/app'

const TONES = {
  brand: { ring: 'bg-brand/10', core: 'bg-brand' },
  sky: { ring: 'bg-sky-400/15', core: 'bg-sky-500' },
  amber: { ring: 'bg-amber-400/20', core: 'bg-amber-500' },
}

export default function HowItWorks() {
  return (
    <section id="how" className="section relative overflow-hidden">
      <Ring className="right-[6%] top-[18%] h-6 w-6" color="border-brand/30" />
      <Dot className="left-[4%] bottom-[24%] h-3 w-3" />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Steps */}
          <div>
            <Reveal>
              <h2 className="sec-title">Set Up In Under Two Minutes</h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-5 max-w-[480px]">
                Three steps, and the longest one is waiting for your bank to confirm. No spreadsheets to import and
                nothing to categorise by hand.
              </p>
            </Reveal>

            <ol className="mt-10 space-y-9">
              {steps.map((s, i) => {
                const tone = TONES[s.tone] ?? TONES.brand
                return (
                  <Reveal key={s.title} delay={140 + i * 110}>
                    <li className="flex gap-5">
                      <span className={`relative grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full ${tone.ring}`}>
                        <span className={`grid h-[50px] w-[50px] place-items-center rounded-full ${tone.core} text-white`}>
                          <AppIcon name={s.icon} className="h-6 w-6" />
                        </span>
                      </span>
                      <div>
                        <h3 className="font-display text-[19px] font-bold text-ink">{s.title}</h3>
                        <p className="mt-1.5 text-[15px]">{s.text}</p>
                      </div>
                    </li>
                  </Reveal>
                )
              })}
            </ol>
          </div>

          {/* Device */}
          <Reveal delay={180} className="flex justify-center lg:justify-end">
            <div className="relative animate-floatY">
              <PhoneFrame className="h-[540px] w-[266px] rotate-[5deg]">
                <SplitScreen />
              </PhoneFrame>
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 grid h-16 w-16 place-items-center rounded-full bg-brand-grad text-white shadow-lift"
              >
                <AppIcon name="plus" className="h-7 w-7" />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
