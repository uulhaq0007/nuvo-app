import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import AppIcon from '../ui/AppIcon'
import Reveal from '../ui/Reveal'
import { brand, footerLinks } from '../../data/app'

const socials = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn]

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="relative mt-16 lg:mt-24">
      {/* Curved top edge sitting above the gradient band */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[60px] w-full lg:h-[90px]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="footerGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#7d4196" />
            <stop offset="1" stopColor="#ff3494" />
          </linearGradient>
        </defs>
        <path d="M0 90V34C240 4 520-8 760 6c220 13 460 34 680 46v38z" fill="url(#footerGrad)" />
      </svg>

      <div className="relative bg-brand-grad pb-8 pt-6">
        <span aria-hidden="true" className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <span aria-hidden="true" className="pointer-events-none absolute right-[8%] bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="container relative">
          <div className="grid gap-12 py-10 lg:grid-cols-4">
            {/* Brand */}
            <Reveal>
              <span className="font-display text-[34px] font-bold text-white">{brand.wordmark}</span>
              <p className="mt-4 max-w-[300px] text-[15px] text-white/75">
                One calm dashboard for everything you earn, owe and set aside. Built in Melbourne, used in nineteen
                countries.
              </p>
              <div className="mt-6 flex gap-3">
                {socials.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label="Nuvo social profile"
                    className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white"
                  >
                    <Icon className="text-[15px]" />
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Link columns */}
            {footerLinks.map((col, i) => (
              <Reveal key={col.title} delay={100 * (i + 1)}>
                <h3 className="font-display text-[20px] font-bold text-white">{col.title}</h3>
                <span className="mt-3 flex gap-1.5">
                  <span className="block h-1 w-7 rounded-full bg-white/80" />
                  <span className="block h-1 w-3 rounded-full bg-white/50" />
                  <span className="block h-1 w-5 rounded-full bg-white/50" />
                </span>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#home"
                        onClick={(e) => go(e, '#home')}
                        className="text-[15px] text-white/75 transition-all duration-300 hover:translate-x-1 hover:text-white inline-block"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            {/* Contact */}
            <Reveal delay={300}>
              <h3 className="font-display text-[20px] font-bold text-white">Contact Us</h3>
              <span className="mt-3 flex gap-1.5">
                <span className="block h-1 w-7 rounded-full bg-white/80" />
                <span className="block h-1 w-3 rounded-full bg-white/50" />
                <span className="block h-1 w-5 rounded-full bg-white/50" />
              </span>

              <ul className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand">
                    <AppIcon name="phone" className="h-4 w-4" />
                  </span>
                  <span className="text-[14px] text-white/80">
                    <a href={`tel:${brand.phone.replace(/[^+\d]/g, '')}`} className="block hover:text-white">{brand.phone}</a>
                    <a href={`tel:${brand.phoneAlt.replace(/[^+\d]/g, '')}`} className="block hover:text-white">{brand.phoneAlt}</a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand">
                    <AppIcon name="mail" className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 text-[14px] text-white/80">
                    <a href={`mailto:${brand.email}`} className="block break-all hover:text-white">{brand.email}</a>
                    <a href={`mailto:${brand.sales}`} className="block break-all hover:text-white">{brand.sales}</a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand">
                    <AppIcon name="pin" className="h-4 w-4" />
                  </span>
                  <span className="text-[14px] text-white/80">{brand.address}</span>
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="border-t border-white/20 pt-6 text-center text-[14px] text-white/75">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
