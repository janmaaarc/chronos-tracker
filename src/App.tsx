import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Integrations from './components/Integrations'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-slate-950 transition-colors">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Integrations />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}

export default App
