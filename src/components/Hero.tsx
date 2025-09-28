import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'

const badges = ['Made in EU', 'Flacon rPET', 'Moins de plastique']

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-gradient text-ivory"
    >
      <div className="absolute inset-0">
        <img
          src="/hero-placeholder.svg"
          alt="Texture aquatique luxueuse"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/70 via-deep/60 to-forest/80" />
      </div>
      <div className="container relative flex flex-col gap-10 py-28 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-7">
          <Reveal className="inline-flex rounded-full border border-gold/40 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-gold/80">
            Nouvelle routine
          </Reveal>
          <Reveal as="h1" className="text-4xl leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
            La douche éco-luxe, en pastille.
          </Reveal>
          <Reveal as="p" className="max-w-lg text-base text-ivory/85 sm:text-lg" delay={0.1}>
            Un flacon réutilisable, des recharges compactes, moins de plastique au quotidien. AquaDrop marie sensorialité, efficacité et engagement environnemental.
          </Reveal>
          <Reveal className="flex flex-col gap-3 pt-4 sm:flex-row" delay={0.15}>
            <a href="#boutique" className="btn-primary">Découvrir le kit</a>
            <a href="#recharges" className="btn-secondary">Voir les recharges</a>
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-3 pt-6" delay={0.2}>
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-gold/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ivory/80"
              >
                {badge}
              </span>
            ))}
          </Reveal>
        </div>
        <motion.div
          className="relative mx-auto max-w-md rounded-[28px] border border-gold/30 bg-white/10 p-6 shadow-luxe backdrop-blur-lg"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.28, 0.11, 0.32, 1] }}
        >
          <div className="rounded-[22px] bg-ivory/95 p-6 text-center text-ink shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Le geste AquaDrop</p>
            <h2 className="mt-3 font-display text-2xl text-deep">Un spa dans votre salle de bain</h2>
            <p className="mt-3 text-sm text-ink/70">
              Une mousse dense, des parfums signature et un impact réduit grâce à notre flacon rPET réutilisable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
