import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { brand, navigation } from '../../data/app'

/** Transparent overlay header that turns solid once the page scrolls. */
export default function Header() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 90)

      // Highlight whichever section currently occupies the upper viewport.
      let current = navigation[0].href
      for (const item of navigation) {
        const el = document.querySelector(item.href)
        if (el && el.getBoundingClientRect().top <= 140) current = item.href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        stuck ? 'bg-white/95 py-3 shadow-soft backdrop-blur' : 'py-5'
      }`}
    >
      <div className="container flex items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(e) => go(e, '#home')}
          className={`font-display text-[28px] font-bold tracking-tight transition-colors ${
            stuck ? 'text-grad' : 'text-ink'
          }`}
        >
          {brand.wordmark}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              aria-current={active === item.href ? 'true' : undefined}
              className={`relative font-display text-[15px] font-medium transition-colors duration-200 hover:text-brand ${
                active === item.href ? 'text-brand' : stuck ? 'text-ink' : 'text-ink/80'
              }`}
            >
              {item.label}
              {active === item.href && (
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-brand-grad" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            onClick={(e) => go(e, '#pricing')}
            className="hidden rounded-full bg-white px-7 py-3 font-display text-[14px] font-semibold uppercase tracking-wide text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-grad hover:text-white sm:block"
          >
            Download
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center rounded-full bg-brand-grad text-white lg:hidden"
          >
            <FiMenu className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${open ? 'visible' : 'invisible'}`} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[300px] max-w-[85vw] flex-col bg-white transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
            <span className="font-display text-[24px] font-bold text-grad">{brand.wordmark}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-haze text-ink transition hover:bg-brand-grad hover:text-white"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="divide-y divide-ink/5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => go(e, item.href)}
                    className={`block py-3.5 font-display text-[16px] font-medium ${
                      active === item.href ? 'text-brand' : 'text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#pricing" onClick={(e) => go(e, '#pricing')} className="btn-grad mt-7 w-full">
              Download
            </a>

            <p className="mt-6 text-[14px]">
              <a href={`mailto:${brand.email}`} className="transition hover:text-brand">
                {brand.email}
              </a>
            </p>
          </nav>
        </aside>
      </div>
    </header>
  )
}
