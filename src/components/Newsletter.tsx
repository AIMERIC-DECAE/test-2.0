import { FormEvent, useState } from 'react'
import { Reveal } from './Reveal'

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string
    if (email) {
      setSubmitted(true)
      window.setTimeout(() => setSubmitted(false), 4000)
      form.reset()
    }
  }

  return (
    <section id="newsletter" className="py-24">
      <div className="container">
        <Reveal className="rounded-panel border border-gold/20 bg-white/90 p-10 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Newsletter</p>
              <h2 className="text-3xl text-deep">Recevez nos lancements limités</h2>
              <p className="text-sm text-ink/70">
                Des fragrances saisonnières, des collaborations design et des offres privées dans votre boîte mail.
              </p>
            </div>
            <form className="flex w-full max-w-lg flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="email-newsletter">
                Adresse email
              </label>
              <input
                id="email-newsletter"
                name="email"
                type="email"
                required
                placeholder="vous@exemple.com"
                className="w-full rounded-full border border-gold/30 bg-white/70 px-5 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua"
              />
              <button type="submit" className="btn-primary">
                Je m’inscris
              </button>
            </form>
          </div>
          <div aria-live="polite" className="pt-3 text-sm text-forest">
            {submitted && 'Merci, nous vous écrivons très vite !'}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
