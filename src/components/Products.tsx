import { Reveal } from './Reveal'

const recharges = [
  {
    name: 'Sport',
    description: 'Frais et tonique, une explosion marine et mentholée.',
    notes: 'Recharge 4,20 €',
    image: '/recharge-sport.svg',
  },
  {
    name: 'Écolo',
    description: 'Herbacé et boisé, un souffle de forêt européenne.',
    notes: 'Recharge 4,20 €',
    image: '/recharge-ecolo.svg',
  },
  {
    name: 'Sensitive',
    description: 'Sans parfum, ultra-douce pour les peaux sensibles.',
    notes: 'Pack de 3: 11,70 €',
    image: '/recharge-sensitive.svg',
  },
]

export function Products() {
  return (
    <section id="boutique" className="bg-dark-gradient py-24 text-ivory">
      <div className="container flex flex-col gap-16">
        <div className="grid items-center gap-10 rounded-panel border border-gold/20 bg-white/5 p-10 shadow-luxe backdrop-blur-lg lg:grid-cols-[1.2fr,1fr]">
          <Reveal as="div" className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Le kit essentiel</p>
            <h2 className="text-3xl sm:text-4xl">Le rituel complet AquaDrop</h2>
            <p className="text-sm text-ivory/80">
              Un flacon mousseur en rPET premium et trois pastilles concentrées pour un mois de douches sensorielles. Réutilisez, rechargez, réduisez.
            </p>
            <div className="hairline-gold" />
            <div className="flex flex-col gap-2 text-sm">
              <span className="font-display text-2xl text-gold">23,90 €</span>
              <span className="text-ivory/70">Inclut le flacon rPET + 3 pastilles signature.</span>
            </div>
            <a href="#contact" className="btn-primary inline-flex max-w-max">Commander</a>
          </Reveal>
          <Reveal as="div" className="relative overflow-hidden rounded-[28px] border border-gold/30 bg-white/10 p-4 shadow-soft" delay={0.15}>
            <img
              src="/kit-placeholder.svg"
              alt="Kit essentiel AquaDrop"
              className="h-full w-full rounded-[22px] object-cover"
            />
          </Reveal>
        </div>
        <div id="recharges" className="flex flex-col gap-6">
          <Reveal as="h3" className="text-2xl text-gold">Les recharges signature</Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {recharges.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 0.05}
                className="flex flex-col gap-4 rounded-panel border border-gold/20 bg-white/8 p-6 text-ivory shadow-soft backdrop-blur"
              >
                <div className="overflow-hidden rounded-[22px] border border-gold/30">
                  <img src={item.image} alt={`Recharge ${item.name}`} className="h-48 w-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-sm text-ivory/80">{item.description}</p>
                  <p className="text-sm text-gold/90">{item.notes}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
