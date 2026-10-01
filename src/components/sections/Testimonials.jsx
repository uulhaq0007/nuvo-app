import { useCallback, useEffect, useState } from 'react'
import AppIcon from '../ui/AppIcon'
import { Cross, Diamond, Ring } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/app'

/** Three-up quote carousel that steps one card at a time. */
export default function Testimonials() {
  const [start, setStart] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = testimonials.length

  const go = useCallback((next) => setStart((c) => (next + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => go(start + 1), 6000)
    return () => clearTimeout(t)
  }, [start, paused, go])

  // Three consecutive cards, wrapping around the list.
  const visible = [0, 1, 2].map((o) => testimonials[(start + o) % total])

  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="blob pointer-events-none absolute -right-[18%] top-[6%] h-[560px] w-[620px] animate-blobMorph opacity-90"
      />
      <Ring className="left-[7%] top-[26%] h-6 w-6" />
      <Cross className="left-[4%] bottom-[26%] h-6 w-6" />
      <Diamond className="left-[16%] bottom-[14%] h-5 w-5" />

      <div className="container relative">
        <div className="max-w-[560px]">
          <Reveal>
            <h2 className="sec-title">What People Tell Us</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-4">
              Unedited feedback from the in-app survey we send after ninety days of use.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, i) => (
            <article
              key={`${t.name}-${start}`}
              className={`relative rounded-2xl bg-white p-7 shadow-card ${i === 2 ? 'hidden lg:block' : ''} ${
                i === 1 ? 'hidden md:block' : ''
              }`}
            >
              <AppIcon name="check" className="hidden" />
              <span aria-hidden="true" className="absolute right-6 top-6 font-display text-[52px] leading-none text-brand/20">
                &rdquo;
              </span>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-brand/40 ring-offset-2"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-[16px] font-bold text-ink">{t.name}</p>
                  <p className="text-[13px] text-grape">{t.role}</p>
                </div>
              </div>

              <p className="mt-5 text-[15px] leading-[1.85]">{t.quote}</p>
            </article>
          ))}
        </div>

        <div className="mt-9 flex items-center gap-4">
          <button
            type="button"
            onClick={() => go(start - 1)}
            aria-label="Previous testimonials"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand/40 text-brand transition hover:bg-brand-grad hover:text-white"
          >
            <AppIcon name="arrowLeft" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(start + 1)}
            aria-label="Next testimonials"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-brand/40 text-brand transition hover:bg-brand-grad hover:text-white"
          >
            <AppIcon name="arrowRight" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
