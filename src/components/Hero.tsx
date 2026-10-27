import { MessageCircle, ChevronRight, ShieldCheck, Star } from 'lucide-react';
import { waLink } from '@/lib/site';

const HERO_IMG =
  'https://images.pexels.com/photos/9518244/pexels-photo-9518244.jpeg?auto=compress&cs=tinysrgb&w=1400';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-950 pt-16 md:pt-20">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Lezione di guida con istruttore esperto"
          className="h-full w-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900/95 to-brand-800/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.35),transparent_55%)]" />
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:py-28">
        {/* Copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <Star className="h-3.5 w-3.5 text-amber-300" />
            Esperienza decennale a Foggia
          </div>

          <h1 className="mt-6 font-display text-4xl font-800 leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Prendi la Patente o la tua{' '}
            <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
              Abilitazione Nautica
            </span>{' '}
            a Foggia senza stress!
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/90">
            Corsi professionali per tutte le categorie di patente, rinnovo rapido e
            scuola nautica con istruttori esperti del territorio foggiano.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contatti" className="btn-accent">
              Richiedi Informazioni
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              Scrivici su WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {[
              { num: '30+', label: 'Anni di attività' },
              { num: '5.000+', label: 'Patenti conseguite' },
              { num: 'A · B · C · D', label: 'Tutte le categorie' },
            ].map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-display text-2xl font-800 text-white">{s.num}</p>
                <p className="mt-1 text-xs font-medium text-brand-200/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md animate-float lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-500/30 to-accent-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <img
                src={HERO_IMG}
                alt="Istruttore che insegna a guidare"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-success-500/90 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-700 text-white">Quiz sempre aggiornati</p>
                  <p className="text-xs text-brand-100/80">Metodo moderno · Guide flessibili</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none">
          <path
            d="M0 40 C 240 80 480 0 720 20 C 960 40 1200 80 1440 30 L1440 80 L0 80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
