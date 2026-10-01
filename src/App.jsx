import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Solution from './components/sections/Solution'
import HowItWorks from './components/sections/HowItWorks'
import VideoBlock from './components/sections/VideoBlock'
import Screens from './components/sections/Screens'
import Partners from './components/sections/Partners'
import Newsletter from './components/sections/Newsletter'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Solution />
        <HowItWorks />
        <VideoBlock />
        <Screens />
        <Partners />
        <Newsletter />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
