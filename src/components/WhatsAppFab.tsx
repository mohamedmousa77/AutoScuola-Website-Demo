import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { waLink, WHATSAPP_MSG } from '@/lib/site';

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={waLink(WHATSAPP_MSG)}
      target="_blank"
      rel="noreferrer"
      aria-label="Scrivici su WhatsApp"
      className={`group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-success-600 py-3 pl-3 pr-4 text-white shadow-lg transition-all duration-300 hover:bg-success-700 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'
      }`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-success-400 animate-pulse-ring" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">
        Scrivici su WhatsApp
      </span>
    </a>
  );
}
