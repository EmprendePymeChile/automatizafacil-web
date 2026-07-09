'use client';

import { useState } from 'react';
import { Zap, MessageCircle, Send, Clock } from 'lucide-react';
import { LINKS } from '@/lib/constants';

export default function ConversionAssistant() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    empresa: '',
    detalle: '',
  });

  const buildWhatsAppUrl = () => {
    const msg = `Hola Roberto, soy ${form.nombre || '[tu nombre]'}. ${form.detalle || 'Quiero agendar un diagnóstico gratuito de 15 minutos para revisar qué puedo automatizar con IA en mi negocio.'}${form.empresa ? ` (Empresa: ${form.empresa})` : ''}`;
    return `https://wa.me/56981492346?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="badge mb-4">Diagnóstico IA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Quieres que revisemos qué puedes automatizar?
          </h2>
          <p className="text-text leading-relaxed">
            Agenda un diagnóstico gratuito de 15 minutos y conversemos qué procesos,
            tareas o atención puedes optimizar con IA.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Chat simulation */}
          <div className="glass-card rounded-panel flex flex-col">
            <div className="flex items-center gap-3 pb-4 border-b border-glass-border mb-4">
              <div className="w-11 h-11 rounded-full glass-raised flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Asistente AutomatizaFácil</p>
                <p className="text-xs text-greencyan">● En línea</p>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              {/* Assistant message */}
              <div className="flex gap-2 max-w-[85%]">
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-cyan" />
                </div>
                <div className="glass-raised rounded-card rounded-tl-sm px-4 py-2.5 text-sm text-white">
                  Hola, soy el asistente de AutomatizaFácil. ¿Quieres revisar qué tareas
                  puedes automatizar con IA en tu negocio?
                </div>
              </div>

              {/* User message */}
              <div className="flex gap-2 max-w-[85%] ml-auto justify-end">
                <div className="bg-cyan/15 border border-cyan/30 rounded-card rounded-tr-sm px-4 py-2.5 text-sm text-white">
                  Sí, quiero agendar un diagnóstico gratuito.
                </div>
              </div>

              {/* Assistant response */}
              <div className="flex gap-2 max-w-[85%]">
                <div className="w-8 h-8 rounded-full glass flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-cyan" />
                </div>
                <div className="glass-raised rounded-card rounded-tl-sm px-4 py-2.5 text-sm text-white">
                  ¡Perfecto! Completa el formulario y te contactamos por WhatsApp para
                  agendar tu sesión de 15 minutos. 🚀
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-panel">
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-white mb-1.5">Nombre *</label>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full glass rounded-pill px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-cyan focus:glow-cyan transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-1.5">Teléfono / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  placeholder="+56 9 1234 5678"
                  className="w-full glass rounded-pill px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-cyan focus:glow-cyan transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white mb-1.5">Email (opcional)</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full glass rounded-pill px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-cyan focus:glow-cyan transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Empresa o actividad</label>
                  <input
                    type="text"
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    placeholder="Tu negocio"
                    className="w-full glass rounded-pill px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-cyan focus:glow-cyan transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white mb-1.5">¿Qué quieres automatizar?</label>
                <textarea
                  rows={3}
                  value={form.detalle}
                  onChange={(e) => setForm({ ...form, detalle: e.target.value })}
                  placeholder="Cuéntanos brevemente qué proceso o tarea te gustaría optimizar..."
                  className="w-full glass rounded-card px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-cyan focus:glow-cyan transition-all resize-none"
                />
              </div>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar diagnóstico gratuito
              </a>

              <a
                href={LINKS.asesoriaPagada}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                <Clock className="w-4 h-4 text-orange" />
                Prefiero una asesoría de 60 minutos
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
