import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const links = [
  { label: 'Boutique', href: '#boutique' },
  { label: 'Comment ça marche', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Équipe', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [open])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition duration-500',
        scrolled ? 'backdrop-blur-xl bg-ivory/85 shadow-lg shadow-deep/10 border-b border-gold/20' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between gap-4 py-4">
        <a href="#top" className="flex items-center gap-3 text-deep">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory shadow-soft ring-1 ring-gold/40">
            <svg viewBox="0 0 64 64" aria-hidden="true" className="h-6 w-6 text-forest">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#23B5D3" />
                  <stop offset="100%" stopColor="#1F6F57" />
                </linearGradient>
              </defs>
              <path
                d="M32 6c-10.5 8.4-17 18.9-17 28a17 17 0 0 0 34 0c0-9.1-6.5-19.6-17-28Z"
                fill="url(#logoGradient)"
              />
              <rect x="27" y="36" width="10" height="18" rx="4" fill="#C6A15B" />
            </svg>
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-tight">AquaDrop</span>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Eco-luxe</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 transition duration-300 ease-luxe hover:text-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua"
            >
              {link.label}
              <span className="absolute inset-x-2 -bottom-1 h-px scale-x-0 bg-gold transition-transform duration-300 ease-luxe group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ivory/70 text-deep shadow-soft transition md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.28, 0.11, 0.32, 1] }}
            className="container flex flex-col gap-2 pb-6 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-luxe bg-ivory/90 px-5 py-3 text-sm font-semibold text-deep shadow-soft ring-1 ring-gold/20 transition hover:bg-ivory"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
