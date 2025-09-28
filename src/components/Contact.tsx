import { FormEvent } from 'react'
import { Reveal } from './Reveal'

const directMail = 'mailto:decaeaimeric@gmail.com?subject=AquaDrop%20–%20Contact'

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string
    const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`)
    window.location.href = `${directMail}&body=${body}`
    form.reset()
  }

  return (
    <section id="contact" className="py-24">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <Reveal as="p" className="text-xs uppercase tracking-[0.4em] text-gold/80">
            Contact
          </Reveal>
          <Reveal as="h2" className="text-3xl sm:text-4xl">
            Parlons de votre future routine
          </Reveal>
          <Reveal as="p" className="mx-auto max-w-2xl text-sm text-ink/70">
            Un besoin retail, un partenariat hôtelier ou une question sur nos pastilles ? Écrivez-nous directement.
          </Reveal>
        </div>
        <div className="grid gap-8 md:grid-cols-[1fr,1fr]">
          <Reveal className="flex flex-col items-start gap-4 rounded-panel border border-gold/20 bg-white/95 p-8 shadow-soft">
            <h3 className="font-display text-xl text-deep">Mail direct</h3>
            <p className="text-sm text-ink/70">Nous répondons sous 24h ouvrées.</p>
            <a href={directMail} className="btn-primary">
              Écrire à AquaDrop
            </a>
          </Reveal>
          <Reveal
            as="form"
            className="grid gap-4 rounded-panel border border-gold/20 bg-white/95 p-8 shadow-soft"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-2">
              <label htmlFor="contact-name" className="text-sm font-medium text-ink/80">
                Nom
              </label>
              <input
                id="contact-name"
                name="name"
                required
                className="rounded-luxe border border-gold/30 bg-white px-4 py-3 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="contact-email" className="text-sm font-medium text-ink/80">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="rounded-luxe border border-gold/30 bg-white px-4 py-3 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-ink/80">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                className="rounded-luxe border border-gold/30 bg-white px-4 py-3 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua"
              />
            </div>
            <button type="submit" className="btn-secondary self-start">
              Construire l’email
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
