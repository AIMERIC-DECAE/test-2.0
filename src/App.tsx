import { Header } from './components/Header'
import { Splash } from './components/Splash'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Products } from './components/Products'
import { Impact } from './components/Impact'
import { FAQ } from './components/FAQ'
import { Team } from './components/Team'
import { Newsletter } from './components/Newsletter'
import { Contact } from './components/Contact'
import { FooterBadges } from './components/FooterBadges'

function App() {
  return (
    <div className="relative" id="top">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(35,181,211,0.08),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(198,161,91,0.08),transparent_55%)]"
      />
      <Splash />
      <Header />
      <main className="flex flex-col gap-0">
        <Hero />
        <HowItWorks />
        <Products />
        <Impact />
        <FAQ />
        <Team />
        <Newsletter />
        <Contact />
      </main>
      <FooterBadges />
    </div>
  )
}

export default App
