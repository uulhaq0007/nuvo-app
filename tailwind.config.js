/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', lg: '1.5rem' },
      screens: { sm: '540px', md: '720px', lg: '960px', xl: '1200px', '2xl': '1200px' },
    },
    extend: {
      colors: {
        brand: { DEFAULT: '#ff3494', dark: '#e01c78', light: '#ff6bb0', pale: '#ffe8f3' },
        grape: { DEFAULT: '#7d4196', dark: '#5f2f74', light: '#a463bd' },
        ink: '#190a32',
        body: '#666666',
        haze: '#f4f4fe',
        frost: '#f5f8fa',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-grad': 'linear-gradient(90deg, #7d4196 0%, #ff3494 100%)',
        'brand-grad-r': 'linear-gradient(90deg, #ff3494 0%, #7d4196 100%)',
        'brand-grad-br': 'linear-gradient(135deg, #7d4196 0%, #ff3494 100%)',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(25, 10, 50, 0.08)',
        lift: '0 18px 50px rgba(255, 52, 148, 0.28)',
        card: '0 8px 30px rgba(25, 10, 50, 0.07)',
        phone: '0 30px 70px rgba(25, 10, 50, 0.22)',
      },
      keyframes: {
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
        floatX: { '0%,100%': { transform: 'translateX(0)' }, '50%': { transform: 'translateX(16px)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        pulseRing: { '0%': { transform: 'scale(.8)', opacity: '.7' }, '100%': { transform: 'scale(1.7)', opacity: '0' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        blobMorph: {
          '0%,100%': { borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%' },
          '50%': { borderRadius: '58% 42% 37% 63% / 56% 59% 41% 44%' },
        },
      },
      animation: {
        floatY: 'floatY 5s ease-in-out infinite',
        floatX: 'floatX 6s ease-in-out infinite',
        spinSlow: 'spinSlow 22s linear infinite',
        pulseRing: 'pulseRing 2.2s cubic-bezier(.4,0,.6,1) infinite',
        marquee: 'marquee 28s linear infinite',
        blobMorph: 'blobMorph 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
