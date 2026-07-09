'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { LINKS } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={LINKS.whatsappDirecto}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con Roberto / Asistente IA"
      className={`fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 group transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-greencyan/40 animate-ping" />
        <div className="relative w-14 h-14 rounded-full bg-greencyan flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
          <MessageCircle className="w-7 h-7 text-midnight" fill="currentColor" />
        </div>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap glass-raised px-4 py-2 rounded-pill text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
          Hablar con Roberto / Asistente IA
        </span>
      </div>
    </a>
  );
}
