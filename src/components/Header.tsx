import { useState } from 'react';
import { Menu, X, MessageCircle, Car, Phone } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { waLink, telLink } from '@/lib/site';

const NAV = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Scuola Nautica', href: '#nautica' },
  { label: 'Perché Noi', href: '#vantaggi' },
  { label: 'Dove Siamo', href: '#contatti' },
];

export default function Header() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-soft backdrop-blur'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-white shadow-soft">
            <Car className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-700 text-brand-800 sm:text-lg">
              Autoscuola Buonfiglio
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-600">
              Sergio · Foggia
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href={telLink()}
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-brand-700 transition-colors hover:bg-brand-50 sm:flex"
            aria-label="Chiamaci"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden btn-whatsapp !py-2.5 !px-4 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden md:inline">Contattaci su WhatsApp</span>
            <span className="md:hidden">WhatsApp</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Apri menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        } transition-all duration-300`}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="btn-whatsapp mt-2 w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Contattaci su WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
