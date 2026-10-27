import {
  GraduationCap,
  ListChecks,
  CalendarClock,
  MapPinned,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: GraduationCap,
    title: 'Metodo di insegnamento moderno',
    description:
      'Approccio didattico aggiornato con simulazioni, quiz interattivi e materiale sempre in linea con le ultime normative.',
  },
  {
    icon: ListChecks,
    title: 'Quiz sempre aggiornati',
    description:
      "Esercitazioni su quiz ufficiali e banche dati aggiornate: arrivi all'esame preparato e sereno.",
  },
  {
    icon: CalendarClock,
    title: 'Guide flessibili',
    description:
      'Orari di guida pratica adattabili al tuo lavoro o ai tuoi studi, anche in tarda serata e weekend.',
  },
  {
    icon: MapPinned,
    title: 'Esperienza sul territorio',
    description:
      "Decenni di attività a Foggia: conosciamo i percorsi d'esame e le sedi più adatte a te.",
  },
  {
    icon: ShieldCheck,
    title: 'Affidabilità e sicurezza',
    description:
      'Istruttori patentati e veicoli omologati per la scuola guida: la tua sicurezza viene prima di tutto.',
  },
  {
    icon: HeartHandshake,
    title: 'Assistenza completa',
    description:
      'Ti seguiamo dalla pratica alla teoria, dalla visita medica fino al ritiro del documento. Mai soli.',
  },
];

export default function WhyUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="vantaggi" className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-accent-100/40 blur-3xl" />

      <div className="container-page relative">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <span className="section-eyebrow">Perché Sceglierci</span>
            <h2 className="mt-4 font-display text-3xl font-800 text-brand-900 sm:text-4xl">
              Foggia ci conosce da anni. I risultati parlano per noi.
            </h2>
          </div>
          <p className="text-slate-500 md:text-right">
            Non vendiamo solo corsi: costruiamo automobilisti e diportisti
            responsabili, con un metodo collaudato e tanta esperienza sul campo.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <article
                key={b.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-700 text-brand-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {b.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
