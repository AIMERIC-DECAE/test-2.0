import { Reveal } from './Reveal'

const team = [
  {
    name: 'Aimeric',
    role: 'Technique & Finance',
    bio: 'Ingénieur chimiste et financier, il supervise la formulation et la structure économique d’AquaDrop.',
  },
  {
    name: 'Lola',
    role: 'R&D & Ventes',
    bio: 'Experte en cosmétique verte, elle conçoit les pastilles et pilote les partenariats retailers.',
  },
  {
    name: 'Élo',
    role: 'Marketing & Ventes',
    bio: 'Storyteller engagée, elle dessine l’univers de marque et active la communauté AquaDrop.',
  },
]

export function Team() {
  return (
    <section id="team" className="py-24">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <Reveal as="p" className="text-xs uppercase tracking-[0.4em] text-gold/80">
            Équipe
          </Reveal>
          <Reveal as="h2" className="text-3xl sm:text-4xl">
            Les artisans de l’expérience AquaDrop
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <Reveal
              key={member.name}
              delay={index * 0.05}
              className="flex flex-col gap-4 rounded-panel border border-gold/20 bg-white/90 p-6 text-left shadow-soft"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest/15 text-forest shadow-soft">
                <span className="font-display text-2xl">{member.name.charAt(0)}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl text-deep">{member.name}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-gold/80">{member.role}</p>
              </div>
              <p className="text-sm text-ink/70">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
