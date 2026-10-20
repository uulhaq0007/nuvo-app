import { useEffect, useState } from 'react'
import AppIcon from '../ui/AppIcon'
import { Diamond } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { videoSection } from '../../data/app'

/**
 * Split band: media on the left with a play control, copy and checklist on the right.
 * The play button opens a lightbox placeholder — no third-party embed is loaded.
 */
export default function VideoBlock() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden bg-haze">
        <div className="grid items-center lg:grid-cols-2">
          {/* Media */}
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}images/video.jpg`}
              alt="The Nuvo product team reviewing designs"
              className="h-[320px] w-full object-cover lg:h-[520px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-ink/25" />

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Play product tour"
              className="group absolute left-full top-1/2 z-10 hidden h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 place-items-center lg:grid"
            >
              <span className="absolute inset-0 animate-pulseRing rounded-full bg-brand/40" />
              <span className="relative grid h-[76px] w-[76px] place-items-center rounded-full bg-brand-grad text-white shadow-lift transition-transform duration-300 group-hover:scale-110">
                <AppIcon name="play" className="ml-1 h-7 w-7" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Play product tour"
              className="group absolute inset-0 grid place-items-center lg:hidden"
            >
              <span className="relative grid h-[70px] w-[70px] place-items-center rounded-full bg-brand-grad text-white shadow-lift">
                <span className="absolute inset-0 animate-pulseRing rounded-full bg-brand/40" />
                <AppIcon name="play" className="relative ml-1 h-6 w-6" />
              </span>
            </button>
          </div>

          {/* Copy */}
          <div className="relative px-6 py-14 lg:py-20 lg:pl-24 lg:pr-[max(1.5rem,calc((100vw-1200px)/2))]">
            <Diamond className="right-[12%] top-[14%] h-5 w-5" />

            <Reveal>
              <h2 className="sec-title">{videoSection.title}</h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-5 max-w-[520px]">{videoSection.text}</p>
            </Reveal>

            <ul className="mt-8 space-y-4">
              {videoSection.checks.map((c, i) => (
                <Reveal key={c} delay={140 + i * 80}>
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-grad text-white">
                      <AppIcon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] text-ink">{c}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-ink/90 px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Product tour"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute right-7 top-7 grid h-12 w-12 place-items-center rounded-full border border-white/30 text-white transition hover:bg-brand"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="grid aspect-video w-full max-w-[880px] place-items-center rounded-2xl bg-ink text-center ring-1 ring-white/15"
          >
            <div className="px-8">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-grad text-white">
                <AppIcon name="play" className="ml-1 h-7 w-7" />
              </span>
              <p className="mt-5 font-display text-[20px] font-semibold text-white">Product tour</p>
              <p className="mt-2 text-[14px] text-white/60">
                This is a front-end demo — drop your video embed in here.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
