'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight, Cloud, Server, Cpu, Bot, Smartphone, Database } from 'lucide-react';
import { LINKS, IMAGES } from '@/lib/constants';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-greencyan/10 rounded-full blur-[120px]" />

      <div className="container-max px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="badge mb-6">
              <span className="w-2 h-2 rounded-full bg-greencyan animate-pulse" />
              IA aplicada para pymes y profesionales
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Automatiza tu negocio con{' '}
              <span className="text-gradient-cyan">inteligencia artificial real</span>
            </h1>

            <p className="text-lg text-text mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Implementamos soluciones de IA en la nube, automatizaciones por API,
              asistentes especializados, agentes autónomos, sistemas privados en
              local o VPS y mini SaaS para optimizar atención, ventas, procesos
              administrativos y toma de decisiones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href={LINKS.whatsappDiagnostico}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Zap className="w-5 h-5" />
                Quiero automatizar mi negocio
              </a>
              <a href="#mini-saas" className="btn-secondary">
                Ver soluciones reales
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-text-muted">
              Diagnóstico inicial · IA aplicada · Soluciones para Chile y LATAM
            </p>
          </motion.div>

          {/* Right: Visual composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const floatingCards = [
    { icon: Cloud, label: 'Nube', top: '0%', left: '0%', delay: 0 },
    { icon: Server, label: 'VPS', top: '10%', right: '0%', delay: 0.1 },
    { icon: Bot, label: 'Asistentes IA', top: '45%', left: '-5%', delay: 0.2 },
    { icon: Cpu, label: 'Agentes', bottom: '5%', right: '-5%', delay: 0.3 },
    { icon: Smartphone, label: 'WhatsApp', bottom: '15%', left: '5%', delay: 0.4 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {IMAGES.hero ? (
        <img
          src={IMAGES.hero}
          alt="AutomatizaFácil - Dashboard IA"
          className="absolute inset-4 rounded-panel object-cover w-full h-auto max-w-full"
        />
      ) : null}

      {/* Central dashboard mockup */}
      <div className="absolute inset-8 glass-card rounded-panel p-6 glow-cyan">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-danger/60" />
          <div className="w-3 h-3 rounded-full bg-warning/60" />
          <div className="w-3 h-3 rounded-full bg-greencyan/60" />
          <div className="flex-1 ml-3 h-6 rounded-pill glass text-xs flex items-center px-3 text-text-muted">
            automatizafacil.org/dashboard
          </div>
        </div>

        {/* Mini stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: 'Leads', value: '47', color: 'text-cyan' },
            { label: 'Tareas', value: '128', color: 'text-greencyan' },
            { label: 'Ahorro', value: '2H→20M', color: 'text-orange' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-card p-3 text-center">
              <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mini chart bars */}
        <div className="flex items-end gap-2 h-24 mb-4">
          {[40, 65, 35, 80, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-pill bg-gradient-to-t from-cyan/20 to-cyan/60"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        {/* Status rows */}
        <div className="space-y-2">
          {['Menos tareas', 'Más clientes', 'Mejor atención'].map((text) => (
            <div key={text} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-greencyan" />
              <span className="text-text">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cards */}
      {floatingCards.map(({ icon: Icon, label, ...pos }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.4 },
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute glass-raised rounded-card px-3 py-2 flex items-center gap-2 text-xs text-white"
          style={pos as React.CSSProperties}
        >
          <Icon className="w-4 h-4 text-cyan" />
          {label}
        </motion.div>
      ))}
    </div>
  );
}
