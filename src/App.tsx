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
