'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const startX = useRef(0);
  const items = TESTIMONIALS;

  const goTo = useCallback(
    (index: number, dir = 1) => {
      setDirection(dir);
      setCurrent(((index % items.length) + items.length) % items.length);
    },
    [items.length]
  );

  const next = () => goTo(current + 1, 1);
  const prev = () => goTo(current - 1, -1);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  // Autoplay
  useEffect(() => {
    if (isHovered || items.length <= 1) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [current, isHovered, items.length]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

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

        {/* Carousel */}
        <div
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Cards */}
          <div className="relative overflow-hidden min-h-[380px] sm:min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="glass-card rounded-panel flex flex-col items-center text-center px-6 py-8 md:px-10 md:py-10 min-h-full">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-3 shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange" fill="currentColor" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-text leading-relaxed mb-5 flex-1 max-w-lg text-sm md:text-base overflow-y-auto">
                    &ldquo;{items[current].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-glass-border w-full shrink-0">
                    <p className="text-white font-semibold text-sm">
                      {items[current].name}
                    </p>
                    <p className="text-xs text-text-muted mb-2">
                      {items[current].role}
                    </p>
                    <span className="inline-flex items-center gap-1.5 rounded-pill px-2.5 py-0.5 text-xs font-medium bg-greencyan/10 text-greencyan">
                      {items[current].result}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          {items.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full glass-raised flex items-center justify-center hover:glow-cyan transition-all z-10"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-cyan" />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full glass-raised flex items-center justify-center hover:glow-cyan transition-all z-10"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 text-cyan" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {items.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-cyan w-6'
                    : 'bg-glass-border hover:bg-cyan/40'
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
