import { useEffect, useState } from 'react'
import { Reveal } from './Reveal'

const highlights = [
  {
    title: 'Bouteilles plastiques évitées',
    suffix: '+',
    description: 'Compteur dynamique basé sur notre communauté.',
  },
  {
    title: 'rPET',
    description: 'Flacon fabriqué à partir de plastique recyclé post-consommation.',
  },
  {
    title: 'Fabrication UE',
    description: 'Pastilles formulées et pressées en France et Allemagne.',
  },
  {
    title: 'Conformité UE',
    description: 'PIF, CPSR, CPNP : toutes les normes européennes respectées.',
  },
]

export function Impact() {
  const [counter, setCounter] = useState(12840)

  useEffect(() => {
    const target = 14560
    const increment = () => {
      setCounter((prev) => {
        if (prev >= target) return target
        return Math.min(target, prev + Math.floor(Math.random() * 45 + 20))
      })
    }
    const id = window.setInterval(increment, 120)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="impact" className="py-24">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <Reveal as="p" className="text-xs uppercase tracking-[0.4em] text-gold/80">
            Impact
          </Reveal>
          <Reveal as="h2" className="text-3xl sm:text-4xl">
            Moins de plastique, plus de conscience
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="rounded-panel border border-gold/20 bg-white/85 p-6 text-left shadow-soft backdrop-blur"
            >
              <h3 className="font-display text-2xl text-deep">{item.title}</h3>
              {index === 0 && (
                <p className="mt-4 text-3xl font-semibold text-forest">
                  {counter.toLocaleString('fr-FR')}
                  {item.suffix}
                </p>
              )}
              <p className="mt-3 text-sm text-ink/70">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
