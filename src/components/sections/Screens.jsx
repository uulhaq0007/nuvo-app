import { useCallback, useEffect, useState } from 'react'
import AppIcon from '../ui/AppIcon'
import PhoneFrame from '../ui/PhoneFrame'
import { SCREEN_MAP } from '../ui/AppScreens'
import { Ring } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { screens } from '../../data/app'

/** Coverflow-style carousel of app screens; the centre item is the active one. */
export default function Screens() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = screens.length

  const go = useCallback((next) => setIndex((c) => (next + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => go(index + 1), 5000)
    return () => clearTimeout(t)
  }, [index, paused, go])

  return (
    <section
      id="screens"
      className="section relative overflow-hidden bg-frost"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Ring className="right-[10%] top-[24%] h-6 w-6" />

      <div className="container relative">
        <div className="text-center">
          <Reveal>
            <h2 className="sec-title">A Look Inside The App</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="sec-lead">
              Five of the screens you will spend the most time in. Everything you see here is the real interface, not a
              marketing mock-up.
            </p>
          </Reveal>
        </div>

        {/* Carousel */}
        <div className="relative mt-14 flex h-[560px] items-center justify-center">
          {screens.map((s, i) => {
            const Screen = SCREEN_MAP[s.key]
            // Shortest signed distance around the ring, so the loop stays smooth.
            let offset = i - index
            if (offset > total / 2) offset -= total
            if (offset < -total / 2) offset += total

            const abs = Math.abs(offset)
            if (abs > 2) return null

            return (
              <div
                key={s.key}
                aria-hidden={offset !== 0}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${offset * 200}px) scale(${offset === 0 ? 1 : 0.82 - abs * 0.06})`,
                  opacity: offset === 0 ? 1 : 0.45 - abs * 0.12,
                  zIndex: 10 - abs,
                  filter: offset === 0 ? 'none' : 'blur(1.5px)',
                }}
              >
                <PhoneFrame className="h-[520px] w-[254px]">
                  <Screen />
                </PhoneFrame>
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous screen"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand/40 text-brand transition hover:bg-brand-grad hover:text-white"
          >
            <AppIcon name="arrowLeft" className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {screens.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${s.label} screen`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === index ? 'w-9 bg-brand-grad' : 'w-2 bg-ink/15 hover:bg-ink/30'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next screen"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand/40 text-brand transition hover:bg-brand-grad hover:text-white"
          >
            <AppIcon name="arrowRight" className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-5 text-center font-display text-[15px] font-semibold text-ink">{screens[index].label}</p>
      </div>
    </section>
  )
}
