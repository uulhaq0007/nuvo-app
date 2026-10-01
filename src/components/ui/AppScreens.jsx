import AppIcon from './AppIcon'
import { StatusBar } from './PhoneFrame'

/**
 * Mock product screens for the Nuvo app, drawn entirely in markup so they stay
 * crisp at any size and ship without image weight. Each export fills a phone screen.
 */

const Bar = ({ w, tone = 'bg-ink/10', h = 'h-2' }) => (
  <span className={`block rounded-full ${tone} ${h}`} style={{ width: w }} />
)

/* ---------------------------------------------------------------- Accounts */
export function AccountsScreen() {
  const rows = [
    { name: 'Everyday', amount: '2,049.95', delta: '+3.2%', up: true, tone: 'bg-emerald-500', pct: 78 },
    { name: 'Savings', amount: '8,265.14', delta: '+1.4%', up: true, tone: 'bg-sky-500', pct: 54 },
    { name: 'Travel Fund', amount: '547.50', delta: '−0.4%', up: false, tone: 'bg-amber-500', pct: 32 },
  ]

  return (
    <div className="flex h-full flex-col bg-[#fbfaff]">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-3">
        <h4 className="font-display text-[19px] font-bold text-ink">Accounts</h4>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-grad text-white">
          <AppIcon name="user" className="h-4 w-4" />
        </span>
      </div>

      <div className="mx-5 mt-4 rounded-2xl bg-brand-grad p-4 text-white">
        <p className="text-[10px] uppercase tracking-wider opacity-80">Total balance</p>
        <p className="mt-1 font-display text-[26px] font-bold leading-none">$10,862.59</p>
        <div className="mt-3 flex items-center justify-between text-[10px]">
          <span className="rounded-full bg-white/20 px-2.5 py-1">All accounts</span>
          <AppIcon name="arrowRight" className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-4 flex-1 space-y-2.5 px-5">
        {rows.map((r) => (
          <div key={r.name} className="rounded-xl bg-white p-3 shadow-[0_2px_10px_rgba(25,10,50,.06)]">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] font-medium text-body">{r.name}</span>
              <span className={`text-[10px] font-semibold ${r.up ? 'text-emerald-600' : 'text-rose-500'}`}>
                {r.delta}
              </span>
            </div>
            <p className="mt-0.5 font-display text-[16px] font-bold text-ink">${r.amount}</p>
            <span className="mt-2 block h-1 w-full overflow-hidden rounded-full bg-ink/10">
              <span className={`block h-full rounded-full ${r.tone}`} style={{ width: `${r.pct}%` }} />
            </span>
          </div>
        ))}
      </div>

      <NavBar active={0} />
    </div>
  )
}

/* ---------------------------------------------------------------- Insights */
export function InsightsScreen() {
  const bars = [42, 68, 35, 84, 56, 73, 48]
  const cats = [
    { label: 'Groceries', pct: 34, tone: 'bg-brand' },
    { label: 'Transport', pct: 22, tone: 'bg-grape' },
    { label: 'Eating out', pct: 18, tone: 'bg-sky-500' },
  ]

  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <div className="px-5 pt-3">
        <h4 className="font-display text-[19px] font-bold text-ink">Insights</h4>
        <p className="text-[11px] text-body">August spending</p>
      </div>

      <div className="mx-5 mt-4 rounded-2xl bg-haze p-4">
        <div className="flex h-[86px] items-end justify-between gap-1.5">
          {bars.map((b, i) => (
            <span
              key={i}
              className={`w-full rounded-t-md ${i === 3 ? 'bg-brand-grad' : 'bg-ink/10'}`}
              style={{ height: `${b}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-body">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex-1 space-y-3 px-5">
        {cats.map((c) => (
          <div key={c.label}>
            <div className="flex justify-between text-[11px]">
              <span className="text-ink">{c.label}</span>
              <span className="font-semibold text-body">{c.pct}%</span>
            </div>
            <span className="mt-1.5 block h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
              <span className={`block h-full rounded-full ${c.tone}`} style={{ width: `${c.pct * 2.4}%` }} />
            </span>
          </div>
        ))}
      </div>

      <NavBar active={1} />
    </div>
  )
}

/* ------------------------------------------------------------------- Goals */
export function GoalsScreen() {
  const goals = [
    { name: 'Japan trip', have: 2400, want: 4000, tone: 'stroke-brand' },
    { name: 'New laptop', have: 1150, want: 2200, tone: 'stroke-grape' },
  ]

  return (
    <div className="flex h-full flex-col bg-[#fbfaff]">
      <StatusBar />
      <div className="px-5 pt-3">
        <h4 className="font-display text-[19px] font-bold text-ink">Goals</h4>
      </div>

      <div className="mt-3 flex-1 space-y-3 px-5">
        {goals.map((g) => {
          const pct = Math.round((g.have / g.want) * 100)
          const R = 20
          const C = 2 * Math.PI * R
          return (
            <div key={g.name} className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-[0_2px_10px_rgba(25,10,50,.06)]">
              <div className="relative h-12 w-12 shrink-0">
                <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
                  <circle cx="24" cy="24" r={R} fill="none" className="stroke-ink/10" strokeWidth="5" />
                  <circle
                    cx="24" cy="24" r={R} fill="none" className={g.tone} strokeWidth="5" strokeLinecap="round"
                    strokeDasharray={`${(pct / 100) * C} ${C}`}
                  />
                </svg>
                <span className="absolute inset-0 grid place-items-center text-[10px] font-bold text-ink">{pct}%</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-[13px] font-semibold text-ink">{g.name}</p>
                <p className="text-[11px] text-body">
                  ${g.have.toLocaleString()} of ${g.want.toLocaleString()}
                </p>
              </div>
            </div>
          )
        })}

        <div className="grid place-items-center rounded-xl border-2 border-dashed border-ink/10 py-4 text-[11px] font-medium text-body">
          <span className="flex items-center gap-1.5">
            <AppIcon name="plus" className="h-3.5 w-3.5" /> New goal
          </span>
        </div>
      </div>

      <NavBar active={2} />
    </div>
  )
}

/* -------------------------------------------------------------- Split bills */
export function SplitScreen() {
  const people = [
    { initials: 'RA', name: 'Rowan', owes: '18.40', tone: 'bg-brand' },
    { initials: 'MK', name: 'Mira', owes: '18.40', tone: 'bg-grape' },
    { initials: 'JD', name: 'Jonah', owes: '18.40', tone: 'bg-sky-500' },
  ]

  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <div className="px-5 pt-3">
        <h4 className="font-display text-[19px] font-bold text-ink">Split Bill</h4>
      </div>

      <div className="mx-5 mt-4 rounded-2xl bg-haze p-4 text-center">
        <p className="text-[10px] uppercase tracking-wider text-body">Total</p>
        <p className="mt-1 font-display text-[24px] font-bold text-ink">$55.20</p>
        <p className="mt-1 text-[11px] text-body">Dinner · Mar 14</p>
      </div>

      <div className="mt-4 flex-1 space-y-2.5 px-5">
        {people.map((p) => (
          <div key={p.name} className="flex items-center gap-3 rounded-xl bg-white p-2.5 shadow-[0_2px_10px_rgba(25,10,50,.06)]">
            <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${p.tone} text-[11px] font-bold text-white`}>
              {p.initials}
            </span>
            <span className="flex-1 text-[12px] font-medium text-ink">{p.name}</span>
            <span className="font-display text-[13px] font-bold text-ink">${p.owes}</span>
          </div>
        ))}
      </div>

      <div className="px-5 pb-3">
        <span className="block rounded-full bg-brand-grad py-2.5 text-center font-display text-[12px] font-semibold text-white">
          Request $55.20
        </span>
      </div>
      <NavBar active={3} />
    </div>
  )
}

/* -------------------------------------------------------------------- Card */
export function CardScreen() {
  const tx = [
    { name: 'Rosewood Coffee', time: 'Today · 08:12', amt: '−4.80' },
    { name: 'Metro Transit', time: 'Today · 07:44', amt: '−3.20' },
    { name: 'Salary', time: 'Yesterday', amt: '+2,410.00', pos: true },
  ]

  return (
    <div className="flex h-full flex-col bg-[#fbfaff]">
      <StatusBar />
      <div className="px-5 pt-3">
        <h4 className="font-display text-[19px] font-bold text-ink">Your Card</h4>
      </div>

      <div className="mx-5 mt-4 rounded-2xl bg-gradient-to-br from-ink to-grape p-4 text-white">
        <div className="flex items-start justify-between">
          <span className="font-display text-[13px] font-bold">Nuvo.</span>
          <span className="h-5 w-7 rounded bg-white/25" />
        </div>
        <p className="mt-6 font-mono text-[13px] tracking-[0.18em]">•••• •••• •••• 4192</p>
        <div className="mt-3 flex justify-between text-[9px] uppercase tracking-wider opacity-75">
          <span>R. Ashbury</span>
          <span>09 / 29</span>
        </div>
      </div>

      <div className="mt-4 flex-1 space-y-2 px-5">
        {tx.map((t) => (
          <div key={t.name} className="flex items-center gap-3 rounded-xl bg-white p-2.5 shadow-[0_2px_10px_rgba(25,10,50,.06)]">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-haze">
              <AppIcon name="wallet" className="h-4 w-4 text-grape" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[12px] font-medium text-ink">{t.name}</span>
              <span className="block text-[10px] text-body">{t.time}</span>
            </span>
            <span className={`font-display text-[12px] font-bold ${t.pos ? 'text-emerald-600' : 'text-ink'}`}>
              {t.amt}
            </span>
          </div>
        ))}
      </div>

      <NavBar active={4} />
    </div>
  )
}

/* ----------------------------------------------------------------- Nav bar */
function NavBar({ active = 0 }) {
  const items = ['wallet', 'chart', 'shield', 'split', 'user']
  return (
    <div className="mt-3 flex items-center justify-around border-t border-ink/5 bg-white px-3 py-2.5">
      {items.map((n, i) => (
        <span key={n} className={i === active ? 'text-brand' : 'text-ink/25'}>
          <AppIcon name={n} className="h-[18px] w-[18px]" />
        </span>
      ))}
    </div>
  )
}

export const SCREEN_MAP = {
  accounts: AccountsScreen,
  insights: InsightsScreen,
  goals: GoalsScreen,
  split: SplitScreen,
  card: CardScreen,
}
