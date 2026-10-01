/**
 * Hand-authored line icon set — keeps the build free of third-party icon fonts.
 * All paths drawn on a 24×24 grid with a 1.6 stroke.
 */
const paths = {
  wallet: (
    <>
      <path d="M3.5 7.5A2 2 0 015.5 5.5h11a2 2 0 012 2v1" />
      <path d="M3.5 7.5v10a2 2 0 002 2h13a2 2 0 002-2v-8a2 2 0 00-2-2h-15" />
      <circle cx="16.8" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  split: (
    <>
      <path d="M4 5.5h5.5L12 9l2.5-3.5H20" />
      <path d="M4 18.5h5.5L12 15l2.5 3.5H20" />
      <circle cx="12" cy="12" r="2.2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.3l7 2.6v5.2c0 4.2-2.8 7.8-7 9.2-4.2-1.4-7-5-7-9.2V5.9z" />
      <path d="M9.3 12l1.9 1.9L15 10.2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.4" r="3.4" />
      <path d="M5.3 19.6v-.9a4.9 4.9 0 014.9-4.9h3.6a4.9 4.9 0 014.9 4.9v.9" />
    </>
  ),
  link: (
    <>
      <path d="M10 13.8a4 4 0 005.9.4l2.6-2.6a4 4 0 10-5.7-5.7l-1.5 1.5" />
      <path d="M14 10.2a4 4 0 00-5.9-.4l-2.6 2.6a4 4 0 105.7 5.7l1.5-1.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19.5h16" />
      <path d="M7 19.5v-5M11.7 19.5V8.5M16.3 19.5v-8" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  play: <path d="M8 5.5l11 6.5L8 18.5z" fill="currentColor" stroke="none" />,
  phone: (
    <path d="M7 3.9l2.4 4-1.7 1.9a12 12 0 006.5 6.5l1.9-1.7 4 2.4-.6 3a1.6 1.6 0 01-1.8 1.3C10.9 20.3 3.7 13.1 2.8 5.2A1.6 1.6 0 014.1 3.4z" />
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.6 6.8L12 12.8l8.4-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c0-.1 6.5-5.6 6.5-10.4a6.5 6.5 0 10-13 0C5.5 15.4 12 20.9 12 21z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </>
  ),
  arrowRight: <path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5" />,
  arrowLeft: <path d="M19.5 12h-15M11 5.5L4.5 12l6.5 6.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  eye: (
    <>
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
}

export default function AppIcon({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.check}
    </svg>
  )
}
