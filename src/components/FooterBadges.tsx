const badges = [
  'Paiement sécurisé',
  'Retour 14 jours',
  'Livraison offerte dès 35 €',
]

export function FooterBadges() {
  return (
    <footer className="relative overflow-hidden bg-deep py-12 text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,161,91,0.18),_transparent_70%)]"
      />
      <div className="container relative flex flex-col items-center gap-6 md:flex-row md:justify-center">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-gold/40 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ivory/85"
          >
            {badge}
          </span>
        ))}
      </div>
      <p className="relative mt-6 text-center text-xs text-ivory/60">© {new Date().getFullYear()} AquaDrop. Tous droits réservés.</p>
    </footer>
  )
}
