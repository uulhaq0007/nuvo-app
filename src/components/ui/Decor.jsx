/**
 * Scattered decorative marks (rings, crosses, triangles, diamonds) used as
 * background confetti. Absolutely positioned by the caller.
 */
export function Ring({ className = '', color = 'border-sky-300' }) {
  return <span aria-hidden="true" className={`pointer-events-none absolute rounded-full border-[3px] ${color} ${className}`} />
}

export function Dot({ className = '', color = 'bg-grape/30' }) {
  return <span aria-hidden="true" className={`pointer-events-none absolute rounded-full ${color} ${className}`} />
}

export function Cross({ className = '', color = 'text-brand/35' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`pointer-events-none absolute ${color} ${className}`} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  )
}

export function Triangle({ className = '', color = 'text-brand/30' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`pointer-events-none absolute ${color} ${className}`} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
      <path d="M4 4h16L4 20z" />
    </svg>
  )
}

export function Diamond({ className = '', color = 'text-amber-300/60' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`pointer-events-none absolute ${color} ${className}`} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
      <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" />
    </svg>
  )
}

/** Preset confetti field for light sections. */
export default function Decor() {
  return (
    <>
      <Ring className="left-[6%] top-[22%] h-5 w-5" />
      <Cross className="right-[9%] top-[16%] h-6 w-6" />
      <Triangle className="left-[13%] bottom-[18%] h-6 w-6" />
      <Diamond className="right-[15%] bottom-[24%] h-5 w-5" />
      <Dot className="left-[45%] top-[8%] h-2.5 w-2.5" />
      <Dot className="right-[30%] bottom-[10%] h-2 w-2" color="bg-brand/30" />
    </>
  )
}
