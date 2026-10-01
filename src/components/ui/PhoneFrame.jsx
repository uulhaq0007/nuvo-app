/** Device shell: notch, bezel and screen. Children render inside the screen. */
export default function PhoneFrame({ children, className = '', screenClass = '' }) {
  return (
    <div className={`relative shrink-0 rounded-[2.6rem] bg-[#1c1130] p-[10px] shadow-phone ${className}`}>
      <div className="pointer-events-none absolute inset-0 rounded-[2.6rem] ring-1 ring-inset ring-white/15" />
      {/* Notch */}
      <div className="absolute left-1/2 top-[10px] z-20 h-[26px] w-[110px] -translate-x-1/2 rounded-b-2xl bg-[#1c1130]" />
      <div className={`relative h-full w-full overflow-hidden rounded-[2.1rem] bg-white ${screenClass}`}>
        {children}
      </div>
    </div>
  )
}

/** Status bar shown at the top of each mock screen. */
export function StatusBar({ dark = false }) {
  const tone = dark ? 'text-white/80' : 'text-ink/70'
  return (
    <div className={`flex items-center justify-between px-6 pb-1 pt-3 text-[10px] font-semibold ${tone}`}>
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <svg viewBox="0 0 18 12" className="h-2.5 w-4" fill="currentColor" aria-hidden="true">
          <rect x="0" y="7" width="3" height="5" rx="1" />
          <rect x="4.5" y="5" width="3" height="7" rx="1" />
          <rect x="9" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="12" rx="1" opacity=".4" />
        </svg>
        <svg viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <rect x="1" y="1.5" width="18" height="9" rx="2.5" />
          <rect x="2.8" y="3.3" width="12" height="5.4" rx="1.4" fill="currentColor" stroke="none" />
          <path d="M21 4.5v3" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  )
}
