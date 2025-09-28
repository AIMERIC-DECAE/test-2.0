import { Reveal } from './Reveal'

const steps = [
  {
    title: 'Remplir d’eau',
    description: 'Ajoutez de l’eau tiède dans votre flacon rPET AquaDrop.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12 text-aqua">
        <path
          d="M32 4C20 16 12 28 12 38a20 20 0 0 0 40 0c0-10-8-22-20-34Z"
          fill="currentColor"
          opacity={0.6}
        />
        <path
          d="M32 14c-8 8-13 16-13 23a13 13 0 0 0 26 0c0-7-5-15-13-23Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'Ajouter la pastille',
    description: 'Glissez la pastille AquaDrop, laissez-la se dissoudre.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12 text-gold">
        <rect x="14" y="20" width="36" height="24" rx="12" fill="currentColor" opacity={0.4} />
        <rect x="18" y="24" width="28" height="16" rx="8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Pomper = mousse',
    description: 'Secouez, attendez 90 secondes, et profitez d’une mousse généreuse.',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12 text-ivory">
        <circle cx="22" cy="32" r="10" fill="currentColor" opacity={0.6} />
        <circle cx="36" cy="28" r="12" fill="currentColor" opacity={0.85} />
        <circle cx="46" cy="36" r="8" fill="currentColor" opacity={0.75} />
      </svg>
    ),
  },
]

const kpis = [
  { label: '16–20 douches', detail: 'par flacon' },
  { label: '< 90 s', detail: 'prêt à l’emploi' },
  { label: '3–6 mois', detail: 'après dilution' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(35,181,211,0.18),_transparent_60%)]"
      />
      <div className="container relative flex flex-col gap-16">
        <div className="flex flex-col gap-4 text-center">
          <Reveal as="p" className="mx-auto text-xs uppercase tracking-[0.4em] text-gold/80">
            Comment ça marche
          </Reveal>
          <Reveal as="h2" className="text-3xl sm:text-4xl">
            Une gestuelle simple, un rituel sensorialisé
          </Reveal>
          <Reveal as="p" className="mx-auto max-w-2xl text-sm text-ink/70" delay={0.1}>
            AquaDrop transforme votre douche en spa grâce à des pastilles concentrées qui s’activent avec l’eau.
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.05}
              className="rounded-panel border border-gold/20 bg-white/80 p-6 text-left shadow-soft backdrop-blur"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-deep/10">{step.icon}</div>
              <h3 className="mt-5 text-xl text-deep">{step.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{step.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 rounded-panel border border-gold/20 bg-white/80 p-6 text-center shadow-soft backdrop-blur md:flex-row md:gap-10">
          {kpis.map((kpi, index) => (
            <Reveal key={kpi.label} className="flex flex-col items-center gap-1" delay={0.15 + index * 0.05}>
              <span className="font-display text-2xl text-deep">{kpi.label}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-gold/70">{kpi.detail}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
