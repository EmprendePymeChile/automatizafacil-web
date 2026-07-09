'use client';

import { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 6);

  return (
    <section id="casos" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="badge mb-4">Casos reales</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que nuestros clientes dicen
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Resultados concretos de pymes y profesionales que ya trabajan con
            inteligencia artificial, automatización y estrategia digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-panel flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-sm text-text leading-relaxed mb-6 flex-1 line-clamp-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-glass-border">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-text-muted mb-2">{t.role}</p>
                <span className="inline-flex items-center gap-1.5 rounded-pill px-2.5 py-0.5 text-xs font-medium bg-greencyan/10 text-greencyan">
                  {t.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        {TESTIMONIALS.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? (
                <>
                  Mostrar menos
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Ver todos los casos ({TESTIMONIALS.length})
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
