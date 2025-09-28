import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export function Splash() {
  const [visible, setVisible] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1600)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-deep"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
          onClick={() => setVisible(false)}
        >
          <motion.div
            role="dialog"
            aria-label="AquaDrop intro"
            className="card-luxe relative mx-6 flex w-full max-w-xs flex-col items-center gap-3 rounded-panel bg-ivory/95 px-8 py-7 text-center shadow-luxe"
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-deep/10">
              <svg viewBox="0 0 64 64" aria-hidden="true" className="h-9 w-9 text-forest">
                <defs>
                  <linearGradient id="splashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#23B5D3" />
                    <stop offset="100%" stopColor="#1F6F57" />
                  </linearGradient>
                </defs>
                <path
                  d="M32 6c-10.5 8.4-17 18.9-17 28a17 17 0 0 0 34 0c0-9.1-6.5-19.6-17-28Z"
                  fill="url(#splashGradient)"
                />
                <rect x="26" y="37" width="12" height="16" rx="5" fill="#C6A15B" />
              </svg>
            </div>
            <p className="font-display text-xl text-deep">AquaDrop</p>
            <p className="text-sm text-ink/70">La douche éco-luxe, en pastille.</p>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold/80">Entrer</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
