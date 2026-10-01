import PhoneFrame from '../ui/PhoneFrame'
import { AccountsScreen } from '../ui/AppScreens'
import { Cross, Diamond, Dot, Ring, Triangle } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { hero } from '../../data/app'

export default function Hero() {
  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-40">
      {/* Organic gradient blob anchored top-right */}
      <div
        aria-hidden="true"
        className="blob pointer-events-none absolute -right-[22%] -top-[38%] h-[820px] w-[880px] animate-blobMorph opacity-95 lg:-right-[12%]"
      />

      <Ring className="left-[5%] top-[46%] h-6 w-6" />
      <Cross className="left-[16%] bottom-[16%] h-7 w-7" />
      <Triangle className="left-[20%] top-[16%] h-7 w-7" />
      <Diamond className="right-[46%] top-[10%] h-5 w-5" />
      <Dot className="left-[3%] top-[8%] h-3.5 w-3.5" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="badge-pill">
                <span>{hero.badge}</span>
                {hero.badgeText}
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 font-display text-[38px] font-bold leading-[1.12] text-ink sm:text-[52px] lg:text-[62px]">
                {hero.titleLead}
                <br />
                <span className="text-grad">{hero.titleAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-6 max-w-[520px] text-[17px]">{hero.text}</p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a href="#pricing" onClick={(e) => go(e, '#pricing')} className="btn-grad">
                  {hero.primary}
                </a>
                <p className="text-[14px]">{hero.note}</p>
              </div>
            </Reveal>
          </div>

          {/* Device */}
          <Reveal delay={200} className="relative flex justify-center lg:justify-end">
            <div className="relative animate-floatY">
              <PhoneFrame className="h-[560px] w-[275px] rotate-[8deg] sm:h-[600px] sm:w-[295px]">
                <AccountsScreen />
              </PhoneFrame>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
