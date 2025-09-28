import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'

const faqs = [
  {
    question: 'Combien de douches par pastille ?',
    answer:
      'Une pastille AquaDrop diluée dans notre flacon offre 16 à 20 douches généreuses, selon votre dosage.',
  },
  {
    question: 'La mousse est-elle comparable à un gel classique ?',
    answer:
      'Oui, la pompe foaming crée une mousse dense et enveloppante, tout en utilisant 3 fois moins de matière active.',
  },
  {
    question: 'Convient-il aux peaux sensibles ?',
    answer:
      'Notre version Sensitive est sans parfum et testée dermatologiquement pour respecter les épidermes les plus délicats.',
  },
  {
    question: 'Conservation ?',
    answer:
      'Pastille sèche : 18–24 mois. Une fois diluée : 3–6 mois, à conserver à l’abri du soleil direct.',
  },
  {
    question: 'Livraison ?',
    answer:
      '3,90 € en point relais • 6,90 € à domicile. Offerte dès 35 € d’achat en France métropolitaine.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-gradient-to-br from-aqua/18 via-forest/12 to-transparent blur-3xl"
      />
      <div className="container relative flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <Reveal as="p" className="text-xs uppercase tracking-[0.4em] text-gold/80">
            FAQ
          </Reveal>
          <Reveal as="h2" className="text-3xl sm:text-4xl">
            Vos questions, nos réponses transparentes
          </Reveal>
        </div>
        <div className="mx-auto w-full max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal as="div" key={faq.question} className="overflow-hidden rounded-panel border border-gold/20 bg-white/85 shadow-soft">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-deep">{faq.question}</span>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition"
                    aria-hidden
                  >
                    {isOpen ? '–' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.28, 0.11, 0.32, 1] }}
                    >
                      <div className="px-6 pb-6 text-sm text-ink/70">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
