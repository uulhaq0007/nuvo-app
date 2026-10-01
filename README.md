# Nuvo — Mobile App Landing Page (React)

A single-page app landing site built in React, with original branding, copy, illustration and UI.
Front-end only — no backend, no CMS. All content lives in [`src/data/app.js`](src/data/app.js).

## Stack

| Concern | Choice |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 |
| Styling | Tailwind CSS 3.4 + a component layer in `src/index.css` |
| Icons | Hand-authored SVG set (`AppIcon.jsx`) plus `react-icons` for social glyphs |
| Fonts | Poppins (display) + Roboto (body), via Google Fonts |
| Routing | None — single page with smooth-scroll anchor navigation |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # emits dist/
npm run preview  # serve the production build
```

## Sections

Anchor-navigated single page, in order:

`#home` hero · features · solution + stats + store badges · `#how` three steps ·
video band · `#screens` app-screen carousel · bank partners + FAQ accordion ·
newsletter · `#pricing` four plans · testimonials · `#blog` journal · `#contact` form · footer

## Project layout

```
src/
  components/
    layout/     Header (overlay → solid on scroll, drawer), Footer, BackToTop
    sections/   Hero, Features, Solution, HowItWorks, VideoBlock, Screens,
                Partners, Newsletter, Pricing, Testimonials, Blog, Contact
    ui/         PhoneFrame, AppScreens, AppIcon, Decor, Reveal
  data/app.js   Brand, nav, features, steps, pricing, testimonials, posts
  hooks/        useInView (scroll reveals), useCountUp
public/images/  11 photographs (Unsplash Licence), served locally
```

## The phone mockups

The five app screens in `AppScreens.jsx` — Accounts, Insights, Goals, Split Bills, Your Card —
are rendered **entirely in markup**, not as images. Balance cards, bar charts, progress rings and
the transaction list are all real DOM. That keeps them razor-sharp at any size, adds no image
weight, and means editing a number is a one-line change.

`PhoneFrame.jsx` supplies the device shell (bezel, notch, status bar) and takes any screen as
children.

## Editing content

`src/data/app.js` drives the whole page — brand details, nav, feature copy, pricing tiers,
testimonials and posts.

Palette and gradients live in [`tailwind.config.js`](tailwind.config.js): `brand` (#ff3494),
`grape` (#7d4196), `ink` (#190a32), plus the `bg-brand-grad` gradient utilities.

## Interaction notes

- **Header** — transparent over the hero, turning solid past 90px. The active nav item is derived
  from live section positions, so it tracks manual scrolling as well as clicks.
- **Screens carousel** — coverflow layout using shortest-signed-distance around the ring, so the
  wrap from last to first is smooth in both directions. Autoplay pauses on hover.
- **Pricing** — monthly/annual toggle with real annual figures (not a computed discount).
- **FAQ accordion** — single-open by design: opening one closes the other.
- **Video** — opens a self-contained lightbox placeholder; no third-party embed is loaded. Drop
  your own embed into the modal.
- **Forms** — newsletter and contact both validate client-side and confirm locally. Nothing is
  transmitted.
- **Reveals** — `useInView` adds `.is-visible`, and checks the element rect on mount so an anchor
  jump can never strand a section at `opacity: 0`.
- Full `prefers-reduced-motion` block disables reveals and looping animation.

## Images & attribution

The 11 photographs come from [Unsplash](https://unsplash.com) under the Unsplash Licence — free for
commercial use, no attribution required — and are stored locally so the build has no external image
dependencies.

Everything else is drawn for this project: the wordmark, favicon, the app screens, the phone shell,
the contact illustration, the decorative confetti marks, the store badges, and the partner marks
(which use invented company names — no real logos appear anywhere).

Testimonial and author portraits are stock photos of models, not real customers or staff. Replace
them before the site represents an actual product.
