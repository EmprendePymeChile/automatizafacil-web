'use client';

import { Zap, MessageCircle } from 'lucide-react';
import { LINKS } from '@/lib/constants';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="glass-raised border-t border-glass-raised-border grid grid-cols-2 gap-px">
        <a
          href={LINKS.whatsappDiagnostico}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 bg-cyan text-midnight font-semibold text-sm"
        >
          <Zap className="w-4 h-4" />
          Diagnóstico gratis
        </a>
        <a
          href={LINKS.whatsappDirecto}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-white font-medium text-sm"
        >
          <MessageCircle className="w-4 h-4 text-greencyan" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
