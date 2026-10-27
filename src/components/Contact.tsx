import { useState, FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  Navigation,
  MessageCircle,
} from 'lucide-react';
import {
  ADDRESS,
  PHONE_NUMBER,
  waLink,
  MAPS_LINK,
} from '@/lib/site';
import { useReveal } from '@/hooks/useReveal';

const SERVICE_OPTIONS = [
  'Patente A',
  'Patente B',
  'Patente C / D',
  'CQC Merci / Persone',
  'Scuola Nautica',
  'Rinnovo patente',
  'Visita medica',
  'Recupero punti',
  'Altro',
];

const HOURS = [
  { day: 'Lunedì – Venerdì', time: '09:00 – 13:00 · 16:00 – 19:30' },
  { day: 'Sabato', time: '09:00 – 13:00' },
  { day: 'Domenica', time: 'Chiuso' },
];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const nome = (data.get('nome') as string)?.trim() || '';
    const telefono = (data.get('telefono') as string)?.trim() || '';
    const servizio = (data.get('servizio') as string) || '';
    const messaggio = (data.get('messaggio') as string)?.trim() || '';

    const lines = [
      'Salve, vorrei avere maggiori informazioni sui vostri corsi.',
      '',
      nome && `Nome: ${nome}`,
      telefono && `Telefono: ${telefono}`,
      servizio && `Servizio di interesse: ${servizio}`,
      messaggio && `Messaggio: ${messaggio}`,
    ].filter(Boolean);

    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contatti" className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Contatti &amp; Dove Siamo</span>
          <h2 className="mt-4 font-display text-3xl font-800 text-brand-900 sm:text-4xl">
            Parliamone. Il primo passo è il più semplice.
          </h2>
          <p className="mt-4 text-slate-500">
            Scrivici, chiamaci o passa a trovarci in sede. Ti rispondiamo sempre
            con pazienza e senza impegno.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-8 lg:grid-cols-12 reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          {/* Info + Location card */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="font-display text-lg font-700 text-brand-900">
                Autoscuola Buonfiglio Sergio
              </h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3.5 text-sm text-slate-600">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-800">Indirizzo</span>
                    {ADDRESS}
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-sm text-slate-600">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-800">Telefono</span>
                    <a href={`tel:${PHONE_NUMBER}`} className="hover:text-brand-700">
                      {PHONE_NUMBER}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-sm text-slate-600">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-800">WhatsApp</span>
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-700"
                    >
                      Scrivi subito un messaggio
                    </a>
                  </span>
                </li>
              </ul>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="flex items-center gap-2 text-sm font-700 text-slate-800">
                  <Clock className="h-4 w-4 text-brand-700" />
                  Orari di apertura
                </p>
                <ul className="mt-3 space-y-1.5">
                  {HOURS.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-xs text-slate-500"
                    >
                      <span className="font-medium text-slate-600">{h.day}</span>
                      <span className="text-right">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <LocationCard />
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-soft md:p-10"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-100/50 blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-xl font-700 text-brand-900">
                  Richiedi informazioni gratuite
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Compila il modulo: ti ricontatteremo via WhatsApp entro 24 ore.
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <Field label="Nome e Cognome">
                    <input
                      name="nome"
                      type="text"
                      required
                      placeholder="Es. Mario Rossi"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Telefono">
                    <input
                      name="telefono"
                      type="tel"
                      required
                      placeholder="Es. 333 1234567"
                      className="form-input"
                    />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Servizio di interesse">
                    <select
                      name="servizio"
                      required
                      className="form-input"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleziona un servizio…
                      </option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Messaggio">
                    <textarea
                      name="messaggio"
                      rows={4}
                      placeholder="Raccontaci cosa ti serve: categoria patente, scadenze, dubbi…"
                      className="form-input resize-none"
                    />
                  </Field>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button type="submit" className="btn-primary flex-1">
                    <Send className="h-4 w-4" />
                    Invia richiesta su WhatsApp
                  </button>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp flex-1"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Scrivici ora
                  </a>
                </div>

                <p className="mt-4 text-center text-xs text-slate-400">
                  Premendo "Invia richiesta" si aprirà WhatsApp con il tuo messaggio
                  già pronto da inviare all'autoscuola.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationCard() {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-800 via-brand-800 to-brand-900 p-7 text-white shadow-soft">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
      {/* Stylized map grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <svg className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern id="mapGrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapGrid)" />
        </svg>
      </div>
      {/* Faux roads */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 400 260"
      >
        <path d="M-10 200 C 80 180, 140 150, 220 160 S 360 200, 420 170" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="8" strokeLinecap="round" />
        <path d="M-10 200 C 80 180, 140 150, 220 160 S 360 200, 420 170" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeDasharray="6 10" />
        <path d="M120 -10 C 130 60, 150 90, 180 130 S 230 220, 250 280" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="6" strokeLinecap="round" />
        <path d="M300 -10 C 290 50, 270 90, 250 140 S 240 220, 220 280" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <div className="relative">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-200">
          <Navigation className="h-3.5 w-3.5" />
          Dove trovarci
        </div>

        {/* Pin */}
        <div className="mt-10 flex flex-col items-center">
          <div className="relative">
            <span className="absolute -inset-3 rounded-full bg-accent-500/30 blur-md" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent-600 shadow-lg">
              <MapPin className="h-7 w-7 text-white" />
            </span>
            <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-accent-600" />
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
          <p className="font-display text-base font-700 text-white">
            Via S. Lazzaro, 19
          </p>
          <p className="mt-0.5 text-sm text-brand-100/80">71121 Foggia (FG)</p>

          <div className="mt-4 flex items-center gap-2 text-xs text-brand-100/75">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span>Lun – Ven 09:00–13:00 · 16:00–19:30 · Sab 09:00–13:00</span>
          </div>

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-700 text-brand-800 transition-transform hover:-translate-y-0.5"
          >
            <Navigation className="h-4 w-4" />
            Apri in Google Maps
          </a>
        </div>
      </div>
    </article>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </span>
      {children}
    </label>
  );
}
