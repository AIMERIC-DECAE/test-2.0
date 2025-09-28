const badges = [
  'Paiement sécurisé',
  'Retour 14 jours',
  'Livraison offerte dès 35 €',
]

export function FooterBadges() {
  return (
    <footer className="bg-deep py-10 text-ivory">
      <div className="container flex flex-col items-center gap-6 md:flex-row md:justify-center">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-gold/40 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ivory/85"
          >
            {badge}
          </span>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-ivory/60">© {new Date().getFullYear()} AquaDrop. Tous droits réservés.</p>
    </footer>
  )
}
