// Public assets live under the deploy base (e.g. /nuvo-app/ on GitHub Pages).
const BASE = import.meta.env.BASE_URL

export const brand = {
  name: 'Nuvo',
  wordmark: 'Nuvo.',
  tagline: 'The everyday money app',
  phone: '1800 662 4180',
  phoneAlt: '+61 3 9555 0142',
  email: 'hello@nuvo.app',
  sales: 'sales@nuvo.app',
  address: '212 Flinders Lane, Melbourne VIC 3000, Australia',
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how' },
  { label: 'Screens', href: '#screens' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  badge: 'New',
  badgeText: 'Version 3.0 is out now',
  titleLead: 'Every Dollar,',
  titleAccent: 'Finally Clear',
  text: 'Nuvo pulls your accounts, cards and savings goals into one calm dashboard — so you can see where the month actually went without opening a spreadsheet.',
  primary: 'Get Started Free',
  note: 'Free for 30 days · No card required',
}

export const features = [
  {
    icon: 'wallet',
    title: 'One Clear Balance',
    text: 'Every account in one place, updated the moment a payment lands. No manual refresh, no stale numbers.',
  },
  {
    icon: 'split',
    title: 'Effortless Bill Splits',
    text: 'Split a dinner, a holiday or the rent in two taps. Nuvo tracks who owes what and nudges politely.',
  },
  {
    icon: 'shield',
    title: 'Bank-Grade Security',
    text: 'Read-only connections, biometric unlock and encryption at rest. We can never move your money.',
  },
]

export const solution = {
  title: 'Built For The Way You Actually Spend',
  paras: [
    'Most budgeting tools ask you to categorise every coffee, then quietly guilt you when you stop. Nuvo works the other way round — it learns your patterns first, and only asks when something genuinely looks off.',
    'Connect an account and the first month is already sorted: recurring bills identified, subscriptions surfaced, and a realistic picture of what is actually spare.',
  ],
  stats: [
    { value: '240k+', label: 'Active users' },
    { value: '4.8', label: 'Average rating' },
    { value: '62', label: 'Banks supported' },
  ],
}

export const steps = [
  {
    icon: 'user',
    tone: 'brand',
    title: 'Create Your Profile',
    text: 'Sign up with an email and a passcode. It takes about forty seconds and asks nothing you would not tell a stranger.',
  },
  {
    icon: 'link',
    tone: 'sky',
    title: 'Connect Your Accounts',
    text: 'Pick your bank from the list and authorise a read-only link. Nuvo can see balances, never move funds.',
  },
  {
    icon: 'chart',
    tone: 'amber',
    title: 'Watch It Come Together',
    text: 'Within a minute your last ninety days are categorised, your bills are mapped and your first forecast is ready.',
  },
]

export const videoSection = {
  title: 'Money Software People Actually Open Twice',
  text: 'We spent two years watching people abandon budgeting apps in week three. Nuvo is what came out of fixing every reason they gave us.',
  checks: [
    'Set up in under two minutes, not an evening',
    'Forecasts that adjust when real life does',
    'No ads, and we never sell your data',
    'Export everything, any time, in one click',
  ],
}

export const screens = [
  { key: 'accounts', label: 'Accounts' },
  { key: 'insights', label: 'Insights' },
  { key: 'goals', label: 'Goals' },
  { key: 'split', label: 'Split Bills' },
  { key: 'card', label: 'Your Card' },
]

export const partners = {
  title: 'Works With The Banks You Already Use',
  text: 'Sixty-two institutions supported across Australia and New Zealand, with new connections added every month. If yours is missing, tell us and we will prioritise it.',
  logos: ['Meridian', 'Corvid', 'Halloway', 'Beacon', 'Northgate', 'Aldermann'],
  accordion: [
    {
      q: 'How does Nuvo connect to my bank?',
      a: 'Through your bank’s official open-banking API. You authorise the link on your bank’s own site, and you can revoke it there at any time. Nuvo never sees or stores your banking password.',
    },
    {
      q: 'Can Nuvo move money out of my account?',
      a: 'No. Every connection is strictly read-only. Nuvo can see balances and transactions to categorise them, and that is the full extent of the permission it holds.',
    },
    {
      q: 'What happens to my data if I cancel?',
      a: 'Your connections are severed immediately and your transaction history is deleted within thirty days. You can export the whole archive as CSV or JSON before you go.',
    },
  ],
}

export const newsletter = {
  title: 'Get The Feature Notes',
  text: 'One short email a month covering what shipped, what we learned and what is coming. No marketing, and unsubscribing takes one click.',
}

export const pricing = [
  {
    name: 'Free',
    monthly: 0,
    annual: 0,
    blurb: 'Everything one person needs to see clearly.',
    features: ['2 connected accounts', '90 days of history', 'Monthly forecast', 'CSV export'],
    popular: false,
  },
  {
    name: 'Plus',
    monthly: 6,
    annual: 58,
    blurb: 'For anyone juggling more than one card.',
    features: ['Unlimited accounts', 'Full history', 'Bill splitting', 'Subscription radar'],
    popular: true,
  },
  {
    name: 'Household',
    monthly: 11,
    annual: 106,
    blurb: 'Shared money, without the shared spreadsheet.',
    features: ['Everything in Plus', 'Up to 5 members', 'Shared goals', 'Household reports'],
    popular: false,
  },
  {
    name: 'Business',
    monthly: 24,
    annual: 230,
    blurb: 'Sole traders and small teams keeping books clean.',
    features: ['Everything in Household', 'Receipt capture', 'Tax categories', 'Accountant access'],
    popular: false,
  },
]

export const testimonials = [
  {
    quote: 'I had tried four of these and quit all of them by week three. Nuvo is the first one where the numbers were right on day one, so I never had to go correcting it.',
    name: 'Tomas Delacroix',
    role: 'Freelance Illustrator',
    avatar: `${BASE}images/avatar-1.jpg`,
  },
  {
    quote: 'The subscription radar found nine dollars a month I had been paying to something I cancelled in 2023. It paid for itself before I finished setting it up.',
    name: 'Wren Ashbury',
    role: 'Product Manager',
    avatar: `${BASE}images/avatar-2.jpg`,
  },
  {
    quote: 'We run the household budget out of it now. My partner can see the shared goals without seeing my personal account, which was the exact thing we needed.',
    name: 'Elena Marchetti',
    role: 'Secondary Teacher',
    avatar: `${BASE}images/avatar-3.jpg`,
  },
  {
    quote: 'As a sole trader the receipt capture alone saves me a weekend every quarter. My accountant has stopped sending me passive-aggressive emails.',
    name: 'Sabine Holloway',
    role: 'Ceramicist',
    avatar: `${BASE}images/avatar-4.jpg`,
  },
]

export const posts = [
  {
    slug: 'why-budgets-fail-in-week-three',
    date: '14 Aug 2026',
    category: 'Research',
    title: 'Why Most Budgets Quietly Fail In Week Three',
    excerpt: 'We interviewed 140 people who had abandoned a budgeting app. Almost none of them blamed the budget — they blamed the data entry.',
    author: 'Nadia Kaur',
    role: 'Head of Product',
    avatar: `${BASE}images/author-3.jpg`,
    image: `${BASE}images/blog-1.jpg`,
  },
  {
    slug: 'open-banking-explained',
    date: '02 Aug 2026',
    category: 'Security',
    title: 'Open Banking, Explained Without The Jargon',
    excerpt: 'What actually happens when you connect a bank account to an app — who sees what, what they can do with it, and how to revoke it.',
    author: 'Idris Bello',
    role: 'Security Engineer',
    avatar: `${BASE}images/author-2.jpg`,
    image: `${BASE}images/blog-2.jpg`,
  },
  {
    slug: 'designing-calm-financial-ui',
    date: '19 Jul 2026',
    category: 'Design',
    title: 'Designing Financial Interfaces That Stay Calm',
    excerpt: 'Red numbers and alarm badges make people close the app. Here is the colour and copy system we landed on instead.',
    author: 'Malachi Okoro',
    role: 'Design Lead',
    avatar: `${BASE}images/author-1.jpg`,
    image: `${BASE}images/blog-3.jpg`,
  },
]

export const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press Kit', 'Reviews', 'Terms & Privacy'],
  },
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Security', 'Changelog', 'Status'],
  },
]
