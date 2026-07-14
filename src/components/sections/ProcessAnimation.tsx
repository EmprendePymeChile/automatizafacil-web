'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Search, Settings, TrendingUp } from 'lucide-react';

const STAGES = [
  {
    number: 'PASO 01',
    title: 'Claridad',
    description: 'Conversamos sobre tu negocio, entendemos tus prioridades y definimos qué vale la pena automatizar primero.',
    icon: Search,
    color: '#22d3ee',
    tailwindColor: 'cyan',
  },
  {
    number: 'PASO 02',
    title: 'Acompañamiento',
    description: 'Ves avances reales, revisas la solución con nosotros y tomas decisiones sin perderte en tecnicismos.',
    icon: Settings,
    color: '#8B5CF6',
    tailwindColor: 'violet-500',
  },
  {
    number: 'PASO 03',
    title: 'Resultados',
    description: 'Tu equipo comienza a usar la herramienta, medimos el impacto y mejoramos el sistema según los resultados.',
    icon: TrendingUp,
    color: '#14f5c6',
    tailwindColor: 'greencyan',
  },
] as const;

export default function ProcessAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, margin: '-100px' });
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section id="proceso-ia" className="section-padding relative overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.06), transparent 28%)',
            'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.06), transparent 28%)',
            'radial-gradient(circle at 80% 50%, rgba(20, 245, 198, 0.06), transparent 28%)',
            '#040815',
          ].join(', '),
        }}
      />

      <div className="container-max relative z-10" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="badge mb-4">TU EXPERIENCIA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Lo que vivirás como empresario
          </h2>
          <p className="text-text-muted text-base md:text-lg">
            Un proceso cercano, con avances visibles y sin necesidad de aprender tecnología para obtener resultados.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block relative">
          <ProcessDesktop stages={STAGES} active={inView} reduced={prefersReduced} />
        </div>

        {/* Mobile layout */}
        <div className="md:hidden">
          <ProcessMobile stages={STAGES} active={inView} reduced={prefersReduced} />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Desktop
// ---------------------------------------------------------------------------
function ProcessDesktop({
  stages,
  active,
  reduced,
}: {
  stages: typeof STAGES;
  active: boolean;
  reduced: boolean;
}) {
  return (
    <div className="relative pb-8">
      {/* SVG line + particle */}
      <svg
        className="absolute top-[50px] left-0 w-full h-8 overflow-visible pointer-events-none z-0"
        preserveAspectRatio="none"
      >
        {/* Connector line */}
        <line
          x1="16.67%"
          y1="16"
          x2="83.33%"
          y2="16"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#14f5c6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Traveling particle */}
        {!reduced && (
          <motion.circle
            r="5"
            fill="#22d3ee"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={
              active
                ? {
                    opacity: [0, 1, 1, 1, 1, 1, 0, 0],
                    cx: [
                      '16.67%', '16.67%', '50%', '50%', '83.33%', '83.33%', '16.67%', '16.67%',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.08, 0.35, 0.42, 0.68, 0.75, 0.92, 1],
            }}
          />
        )}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Nodes */}
      <div className="grid grid-cols-3 gap-6 relative z-10">
        {stages.map((stage, i) => (
          <DesktopNode
            key={stage.title}
            stage={stage}
            index={i}
            active={active}
            reduced={reduced}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopNode({
  stage,
  index,
  active,
  reduced,
}: {
  stage: (typeof STAGES)[number];
  index: number;
  active: boolean;
  reduced: boolean;
}) {
  const Icon = stage.icon;
  const delays = [0, 0.35, 0.65];

  return (
    <div className="flex flex-col items-center text-center">
      {/* Node circle */}
      <motion.div
        className="relative mb-6"
        animate={
          active && !reduced
            ? {
                scale: [1, 1.08, 1, 1, 1, 1, 1],
              }
            : {}
        }
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delays[index],
        }}
      >
        {/* Expanding ring */}
        {!reduced && (
          <motion.div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: stage.color, opacity: 0 }}
            animate={
              active
                ? {
                    scale: [1, 1.45],
                    opacity: [0.4, 0],
                  }
                : {}
            }
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: 'easeOut',
              delay: delays[index] + 0.05,
            }}
          />
        )}

        {/* Halo glow */}
        <motion.div
          className="absolute -inset-2 rounded-full blur-xl"
          style={{ backgroundColor: stage.color, opacity: 0 }}
          animate={
            active && !reduced
              ? {
                  opacity: [0.08, 0.18, 0.08, 0.08, 0.08, 0.08, 0.08],
                }
              : {}
          }
          transition={{
            duration: 2.6,
            repeat: Infinity,
            delay: delays[index],
          }}
        />

        {/* Main circle */}
        <div
          className="relative w-[90px] h-[90px] rounded-full glass-raised flex items-center justify-center"
          style={{
            borderColor: stage.color,
            borderWidth: '1.5px',
          }}
        >
          <Icon className="w-8 h-8" style={{ color: stage.color }} />
        </div>
      </motion.div>

      {/* Text */}
      <span
        className="text-xs font-semibold tracking-[0.18em] mb-3 block"
        style={{ color: stage.color }}
      >
        {stage.number}
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
      <p className="text-sm text-text-muted leading-relaxed max-w-[280px] mx-auto">
        {stage.description}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile
// ---------------------------------------------------------------------------
function ProcessMobile({
  stages,
  active,
  reduced,
}: {
  stages: typeof STAGES;
  active: boolean;
  reduced: boolean;
}) {
  return (
    <div className="relative pb-4">
      {/* SVG vertical line + particle */}
      <svg
        className="absolute left-[40px] top-0 w-8 h-full overflow-visible pointer-events-none z-0"
        preserveAspectRatio="none"
      >
        <line
          x1="16"
          y1="50"
          x2="16"
          y2="calc(100% - 50px)"
          stroke="url(#lineGradV)"
          strokeWidth="1.5"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="lineGradV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#14f5c6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {!reduced && (
          <motion.circle
            r="5"
            fill="#22d3ee"
            filter="url(#glowV)"
            initial={{ opacity: 0 }}
            animate={
              active
                ? {
                    opacity: [0, 1, 1, 0, 0, 0, 0],
                    cy: [
                      '60px', '60px', 'calc(33% + 30px)', 'calc(33% + 30px)',
                      'calc(66% + 30px)', 'calc(66% + 30px)', '60px',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.05, 0.38, 0.43, 0.69, 0.88, 1],
            }}
          />
        )}
        <defs>
          <filter id="glowV">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Vertical nodes */}
      <div className="flex flex-col gap-12">
        {stages.map((stage, i) => (
          <MobileNode
            key={stage.title}
            stage={stage}
            index={i}
            active={active}
            reduced={reduced}
          />
        ))}
      </div>
    </div>
  );
}

function MobileNode({
  stage,
  index,
  active,
  reduced,
}: {
  stage: (typeof STAGES)[number];
  index: number;
  active: boolean;
  reduced: boolean;
}) {
  const Icon = stage.icon;
  const delays = [0, 0.35, 0.65];

  return (
    <div className="flex items-start gap-5">
      {/* Node circle (left side) */}
      <motion.div
        className="relative shrink-0"
        animate={
          active && !reduced
            ? { scale: [1, 1.08, 1, 1, 1, 1, 1] }
            : {}
        }
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delays[index],
        }}
      >
        {!reduced && (
          <motion.div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: stage.color, opacity: 0 }}
            animate={
              active
                ? { scale: [1, 1.3], opacity: [0.4, 0] }
                : {}
            }
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: 'easeOut',
              delay: delays[index] + 0.05,
            }}
          />
        )}
        <div
          className="relative w-[72px] h-[72px] rounded-full glass-raised flex items-center justify-center"
          style={{ borderColor: stage.color, borderWidth: '1.5px' }}
        >
          <Icon className="w-6 h-6" style={{ color: stage.color }} />
        </div>
      </motion.div>

      {/* Text (right side) */}
      <div className="flex-1 pt-2">
        <span
          className="text-xs font-semibold tracking-[0.18em] block mb-1"
          style={{ color: stage.color }}
        >
          {stage.number}
        </span>
        <h3 className="text-lg font-bold text-white mb-1">{stage.title}</h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {stage.description}
        </p>
      </div>
    </div>
  );
}
