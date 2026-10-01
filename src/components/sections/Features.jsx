import AppIcon from '../ui/AppIcon'
import { Cross, Ring } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { features } from '../../data/app'

export default function Features() {
  return (
    <section id="features" className="section relative overflow-hidden">
      <Cross className="right-[8%] top-[22%] h-7 w-7" />
      <Ring className="right-[14%] bottom-[24%] h-6 w-6" />

      <div className="container relative">
        <div className="text-center">
          <Reveal>
            <h2 className="sec-title">What Makes It Different</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="sec-lead">
              Three things we got right that most money apps get wrong — and the reason people are still using Nuvo six
              months after they install it.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 130} className="h-full">
              <article className="group flex h-full flex-col items-center text-center">
                <span className="grid h-[92px] w-[92px] place-items-center rounded-[28px] bg-haze text-grape transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-brand-grad group-hover:text-white">
                  <AppIcon name={f.icon} className="h-10 w-10" />
                </span>

                <h3 className="mt-7 font-display text-[21px] font-bold text-ink transition-colors duration-300 group-hover:text-brand">
                  {f.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px]">{f.text}</p>

                <span
                  className={`mt-6 grid h-11 w-11 place-items-center rounded-full font-display text-[15px] font-bold transition-all duration-500 ${
                    i === 0
                      ? 'bg-brand-grad text-white shadow-lift'
                      : 'border-2 border-brand/40 text-brand group-hover:bg-brand-grad group-hover:text-white'
                  }`}
                >
                  {i + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
