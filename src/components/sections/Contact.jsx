import { useState } from 'react'
import AppIcon from '../ui/AppIcon'
import { Cross, Diamond } from '../ui/Decor'
import Reveal from '../ui/Reveal'
import { brand } from '../../data/app'

const empty = { name: '', email: '', phone: '', message: '' }

/** Flat illustration drawn in markup — chat bubbles and a figure. */
function ContactArt() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]" aria-hidden="true">
      <span className="blob absolute inset-0 bg-brand/10" style={{ background: '#ffe8f3' }} />

      <svg viewBox="0 0 340 320" className="relative w-full">
        {/* Chat bubbles */}
        <rect x="24" y="52" width="120" height="16" rx="8" fill="#ffc0dd" />
        <rect x="44" y="82" width="168" height="20" rx="10" fill="#ff3494" />
        <rect x="24" y="116" width="132" height="16" rx="8" fill="#ffc0dd" />
        <rect x="60" y="150" width="86" height="20" rx="10" fill="#ff3494" />
        <circle cx="80" cy="160" r="3" fill="#fff" />
        <circle cx="92" cy="160" r="3" fill="#fff" />
        <circle cx="104" cy="160" r="3" fill="#fff" />

        {/* Figure */}
        <ellipse cx="234" cy="292" rx="62" ry="12" fill="#ffd6e8" />
        <rect x="212" y="228" width="18" height="58" rx="9" fill="#3f3d56" />
        <rect x="238" y="228" width="18" height="58" rx="9" fill="#3f3d56" />
        <ellipse cx="217" cy="290" rx="16" ry="7" fill="#9aa3b8" />
        <ellipse cx="251" cy="290" rx="16" ry="7" fill="#9aa3b8" />
        <rect x="204" y="150" width="60" height="86" rx="26" fill="#ffc93c" />
        <rect x="196" y="196" width="16" height="42" rx="8" fill="#ffc93c" />
        <rect x="256" y="196" width="16" height="42" rx="8" fill="#ffc93c" />
        <rect x="222" y="216" width="34" height="24" rx="5" fill="#fff" stroke="#3f3d56" strokeWidth="2.5" />
        <circle cx="234" cy="128" r="26" fill="#ffb8a0" />
        <path d="M208 126a26 26 0 0152 0c0-22-12-32-26-32s-26 10-26 32z" fill="#f26d5b" />
        <path d="M206 122c-6 14-2 30 6 36-10-2-18-16-14-32z" fill="#f26d5b" />

        {/* Plant */}
        <path d="M306 292c0-26-10-46-10-46s-10 20-10 46" stroke="#3f3d56" strokeWidth="2.5" fill="none" />
        <ellipse cx="286" cy="240" rx="13" ry="8" fill="#ff3494" transform="rotate(-32 286 240)" />
        <ellipse cx="308" cy="230" rx="13" ry="8" fill="#ff3494" transform="rotate(28 308 230)" />
        <ellipse cx="290" cy="266" rx="12" ry="7" fill="#ff6bb0" transform="rotate(-24 290 266)" />
        <ellipse cx="308" cy="258" rx="12" ry="7" fill="#ff6bb0" transform="rotate(24 308 258)" />
      </svg>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (f) => (e) => {
    setForm((p) => ({ ...p, [f]: e.target.value }))
    setErrors((p) => ({ ...p, [f]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A little more detail helps us reply properly.'
    setErrors(next)
    if (Object.keys(next).length) return

    // Front-end only — nothing is transmitted.
    setSent(true)
    setForm(empty)
  }

  const details = [
    { icon: 'phone', lines: [brand.phone, brand.phoneAlt] },
    { icon: 'mail', lines: [brand.email, brand.sales] },
    { icon: 'pin', lines: [brand.address] },
  ]

  return (
    <section id="contact" className="section relative overflow-hidden">
      <Cross className="right-[6%] top-[18%] h-7 w-7" />
      <Diamond className="right-[42%] bottom-[10%] h-5 w-5" />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ContactArt />
          </Reveal>

          <div>
            <Reveal>
              <h2 className="sec-title">Get In Touch</h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-4 max-w-[480px]">
                Questions about a plan, a bank connection or your data? Send a note and a human replies within one
                business day.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <form onSubmit={submit} noValidate className="mt-8">
                {sent && (
                  <div className="mb-5 flex items-center gap-3 rounded-lg bg-brand/10 px-5 py-4 text-[15px] text-ink">
                    <AppIcon name="check" className="h-5 w-5 shrink-0 text-brand" />
                    Thanks — your message has been captured. This demo has no backend, so nothing was sent.
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="sr-only">Name</label>
                    <input id="c-name" placeholder="Name" value={form.name} onChange={update('name')}
                      aria-invalid={Boolean(errors.name)} className={`field ${errors.name ? 'field-error' : ''}`} />
                    {errors.name && <p className="mt-1 text-[13px] text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-email" className="sr-only">Email</label>
                    <input id="c-email" type="email" placeholder="Email" value={form.email} onChange={update('email')}
                      aria-invalid={Boolean(errors.email)} className={`field ${errors.email ? 'field-error' : ''}`} />
                    {errors.email && <p className="mt-1 text-[13px] text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="c-phone" className="sr-only">Phone</label>
                  <input id="c-phone" type="tel" placeholder="Phone (optional)" value={form.phone} onChange={update('phone')} className="field" />
                </div>

                <div className="mt-4">
                  <label htmlFor="c-message" className="sr-only">Message</label>
                  <textarea id="c-message" rows={5} placeholder="Write your message" value={form.message} onChange={update('message')}
                    aria-invalid={Boolean(errors.message)} className={`field resize-none ${errors.message ? 'field-error' : ''}`} />
                  {errors.message && <p className="mt-1 text-[13px] text-red-500">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-grad mt-6">
                  Send Message
                </button>
              </form>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-9 grid gap-5 sm:grid-cols-3">
                {details.map((d) => (
                  <li key={d.icon} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                      <AppIcon name={d.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 text-[13px] leading-relaxed">
                      {d.lines.map((l) => (
                        <span key={l} className="block break-words">{l}</span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
