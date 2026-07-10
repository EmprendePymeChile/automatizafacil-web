'use client';

import { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, Globe, Star } from 'lucide-react';
import { LINKS, CONTACT, SOCIAL } from '@/lib/constants';

const services = [
  'Diagnóstico IA',
  'Asistente IA',
  'Agente IA',
  'Mini SaaS',
  'Automatización WhatsApp',
  'Capacitación',
  'Otro',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    empresa: '',
    servicio: services[0],
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Roberto, soy ${form.nombre}.
Email: ${form.email}
WhatsApp: ${form.whatsapp}
Empresa: ${form.empresa}
Servicio: ${form.servicio}
Mensaje: ${form.mensaje}`;
    window.open(`https://wa.me/56981492346?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Conversemos qué puedes automatizar esta semana
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-card rounded-panel space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white mb-1.5">Nombre *</label>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full glass rounded-pill px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-cyan focus:glow-cyan transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full glass rounded-pill px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-cyan focus:glow-cyan transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white mb-1.5">WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full glass rounded-pill px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-cyan focus:glow-cyan transition-all"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white mb-1.5">Empresa o proyecto</label>
                  <input
                    type="text"
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    className="w-full glass rounded-pill px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-cyan focus:glow-cyan transition-all"
                    placeholder="Tu negocio"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white mb-1.5">Servicio de interés</label>
                <select
                  value={form.servicio}
                  onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                  className="w-full glass rounded-pill px-5 py-3 text-sm text-white focus:outline-none focus:border-cyan focus:glow-cyan transition-all"
                >
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-midnight text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white mb-1.5">Mensaje</label>
                <textarea
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full glass rounded-card px-5 py-3 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-cyan focus:glow-cyan transition-all resize-none"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send className="w-4 h-4" />
                Enviar solicitud
              </button>
            </form>
          </div>

          {/* Sidebar info */}
          <div className="space-y-4">
            <a
              href={LINKS.whatsappDiagnostico}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-panel block group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-card glass-raised flex items-center justify-center group-hover:glow-cyan transition-all">
                  <MessageCircle className="w-6 h-6 text-greencyan" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">WhatsApp directo</p>
                  <p className="text-xs text-text-muted">Diagnóstico gratuito 15 min</p>
                </div>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-panel block group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-card glass-raised flex items-center justify-center group-hover:glow-cyan transition-all">
                  <Mail className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Correo electrónico</p>
                  <p className="text-xs text-text-muted">{CONTACT.email}</p>
                </div>
              </div>
            </a>

            <div className="glass-card rounded-panel">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-cyan" />
                <p className="text-sm text-white font-medium">Ubicación</p>
              </div>
              <p className="text-sm text-text-muted">{CONTACT.ciudad}</p>
              <p className="text-sm text-text-muted">{CONTACT.modo}</p>
              {CONTACT.direccion && (
                <p className="text-sm text-text-muted mt-1">{CONTACT.direccion}</p>
              )}
            </div>

            <a
              href={LINKS.emprendepyme}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-panel block group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-orange" />
                <p className="text-sm text-white font-medium">EmprendePyme.cl</p>
              </div>
              <p className="text-xs text-text-muted">Empresa madre · Consultoría pyme</p>
            </a>

            {SOCIAL.maps && (
              <a
                href={SOCIAL.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-panel block group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-greencyan" />
                  <p className="text-sm text-white font-medium">Encuéntranos</p>
                </div>
                <p className="text-xs text-text-muted">Google Maps</p>
              </a>
            )}

            {SOCIAL.review && (
              <a
                href={SOCIAL.review}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-panel block group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-5 h-5 text-orange" />
                  <p className="text-sm text-white font-medium">Califícanos</p>
                </div>
                <p className="text-xs text-text-muted">Google Review</p>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
