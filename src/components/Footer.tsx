import { Car, MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, waLink } from '@/lib/site';

const NAV = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Scuola Nautica', href: '#nautica' },
  { label: 'Perché Noi', href: '#vantaggi' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.18),transparent_45%)]" />
      <div className="container-page relative py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-white">
                <Car className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-base font-700 text-white">
                  Autoscuola Buonfiglio Sergio
                </p>
                <p className="text-xs uppercase tracking-wider text-accent-300">
                  Foggia
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-brand-200/80">
              La tua autoscuola di fiducia a Foggia: patenti di guida di ogni
              categoria, CQC, scuola nautica, rinnovi e recupero punti. Metodo
              moderno, istruttori esperti.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
              Navigazione
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-brand-100/80 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
              Contatti
            </p>
            <ul className="mt-4 space-y-3 text-sm text-brand-100/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                {ADDRESS}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-300" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>
                  Lun – Ven: 09:00–13:00 · 16:00–19:30
                  <br />
                  Sab: 09:00–13:00
                </span>
              </li>
            </ul>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-success-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-success-700"
            >
              Contattaci su WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-brand-200/70 md:flex-row md:items-center">
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5" />
            © {new Date().getFullYear()} Autoscuola Buonfiglio Sergio · P.IVA · Tutti i diritti riservati.
          </p>
          <p>
            Orari indicativi · Sede di Foggia. Le informazioni e gli orari sono
            puramente indicativi e possono variare.
          </p>
        </div>
      </div>
    </footer>
  );
}
