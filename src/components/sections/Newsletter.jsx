import { useState } from 'react'
import AppIcon from '../ui/AppIcon'
import Reveal from '../ui/Reveal'
import { newsletter } from '../../data/app'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState(null)

  const submit = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg({ ok: false, text: 'Please enter a valid email address.' })
      return
    }
    // Front-end only — nothing leaves the browser.
    setMsg({ ok: true, text: 'You are on the list. (Demo only — nothing was sent.)' })
    setEmail('')
  }

  return (
    <section className="relative overflow-hidden bg-brand-grad py-16 lg:py-24">
      {/* Soft light blooms */}
      <span aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <span aria-hidden="true" className="pointer-events-none absolute right-[12%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="container relative text-center">
        <Reveal>
          <h2 className="sec-title sec-title-light text-white">{newsletter.title}</h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="sec-lead text-white/80">{newsletter.text}</p>
        </Reveal>

        <Reveal delay={170}>
          <form onSubmit={submit} noValidate className="mx-auto mt-9 max-w-[560px]">
            <div className="flex flex-col gap-3 rounded-full bg-white p-2 sm:flex-row sm:gap-0">
              <label htmlFor="news-email" className="sr-only">
                Email address
              </label>
              <input
                id="news-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setMsg(null)
                }}
                placeholder="Your email address"
                className="w-full rounded-full bg-transparent px-6 py-3 text-[15px] text-ink outline-none placeholder:text-body/70"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand-grad px-8 py-3 font-display text-[15px] font-semibold text-white transition-all duration-300 hover:bg-brand-grad-r"
              >
                Subscribe
              </button>
            </div>

            {msg && (
              <p
                className={`mt-3 flex items-center justify-center gap-2 text-[14px] ${
                  msg.ok ? 'text-white' : 'text-rose-100'
                }`}
              >
                {msg.ok && <AppIcon name="check" className="h-4 w-4" />}
                {msg.text}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
