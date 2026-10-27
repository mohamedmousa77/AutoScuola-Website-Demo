import {
  Car,
  Anchor,
  IdCard,
  Stethoscope,
  RotateCcw,
  Clock,
  ChevronRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  accent?: boolean;
};

const SERVICES: Service[] = [
  {
    icon: Car,
    title: 'Patenti di Guida',
    description:
      'Tutte le categorie di patente, dalla A alla D, con teoria e pratica completa.',
    points: ['Patente A (Moto)', 'Patente B (Auto)', 'Patente C e D (Mezzi pesanti)'],
    accent: true,
  },
  {
    icon: IdCard,
    title: 'Corsi CQC',
    description:
      'Carta di Qualificazione del Conducente per chi guida mezzi pesanti a scopo professionale.',
    points: ['CQC Merci', 'CQC Persone', 'Rinnovo periodico'],
  },
  {
    icon: Anchor,
    title: 'Scuola Nautica',
    description:
      'Corsi per patente nautica a motore e a vela con istruttori certificati del mare.',
    points: ['Patente nautica motore', 'Patente nautica vela', 'entro e oltre 12 miglia'],
  },
  {
    icon: RotateCcw,
    title: 'Rinnovo Patente',
    description:
      'Rinnovo patente in sede: rapido, senza code e con supporto completo della pratica.',
    points: ['Rinnovo in sede', 'Pratica completa', 'Consegna veloce'],
  },
  {
    icon: Stethoscope,
    title: 'Visite Mediche',
    description:
      'Visite mediche per il rinnovo e il rilascio patente con medici convenzionati.',
    points: ['Visita patente auto', 'Visita patente speciale', 'Certificati idoneità'],
  },
  {
    icon: Clock,
    title: 'Recupero Punti',
    description:
      'Corsi per il recupero dei punti della patente e aggiornamento alla guida sicura.',
    points: ['Recupero punti patente', 'Corso guida sicura', 'Riduzione sanzioni'],
  },
];

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="servizi" className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Servizi &amp; Corsi</span>
          <h2 className="mt-4 font-display text-3xl font-800 text-brand-900 sm:text-4xl">
            Tutto ciò che serve per guidare e navigare
          </h2>
          <p className="mt-4 text-slate-500">
            Dalla patente di guida all'abilitazione nautica: un servizio completo e
            professionale, pensato per portarti alla meta senza stress.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card ${
                  s.accent
                    ? 'border-brand-200 bg-gradient-to-br from-brand-50 to-white'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      s.accent
                        ? 'bg-brand-700 text-white shadow-soft'
                        : 'bg-brand-50 text-brand-700'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-5 font-display text-xl font-700 text-brand-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {s.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 text-sm font-medium text-slate-600"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success-100 text-success-700">
                          <ChevronRight className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <NauticaBand />
      </div>
    </section>
  );
}

function NauticaBand() {
  return (
    <div
      id="nautica"
      className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 p-8 md:p-12"
    >
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100">
            <Anchor className="h-3.5 w-3.5" />
            Scuola Nautica
          </div>
          <h3 className="mt-5 font-display text-2xl font-800 text-white sm:text-3xl">
            Prendi il mare con la tua abilitazione nautica
          </h3>
          <p className="mt-4 text-brand-100/85">
            Corsi per la patente nautica a motore e a vela, sia entro le 12 miglia
            che per la navigazione senza limiti. Teoria in aula e prove pratiche
            con istruttori certificati.
          </p>
          <a
            href="#contatti"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-700 text-brand-800 shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Iscriviti al corso nautico
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Motore', desc: 'entro 12 miglia · oltre 12 miglia' },
            { label: 'Vela', desc: 'entro 12 miglia · oltre 12 miglia' },
            { label: 'Rinnovo', desc: 'rinnovo patenti nautiche' },
            { label: 'Pratica', desc: 'uscite in mare con istruttore' },
          ].map((b) => (
            <div
              key={b.label}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
            >
              <p className="font-display text-lg font-700 text-white">{b.label}</p>
              <p className="mt-1 text-xs text-brand-100/75">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
