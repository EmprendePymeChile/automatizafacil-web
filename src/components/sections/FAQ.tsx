'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-12">
          <span className="badge mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="glass-card rounded-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left py-1"
              >
                <span className="text-white font-medium text-sm md:text-base">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-text-muted leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
