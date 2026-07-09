import { BookOpen, Users, Bot, Zap, Megaphone, Server, ArrowRight } from 'lucide-react';
import { LINKS } from '@/lib/constants';

const blocks = [
  { icon: BookOpen, text: 'Cursos prácticos de IA para profesionales' },
  { icon: Users, text: 'Talleres para equipos' },
  { icon: Bot, text: 'Capacitación en asistentes IA' },
  { icon: Zap, text: 'Automatización de tareas' },
  { icon: Megaphone, text: 'IA para marketing, ventas y gestión' },
  { icon: Server, text: 'IA privada, nube, local y VPS' },
];

export default function Training() {
  return (
    <section id="capacitacion" className="section-padding relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-greencyan/5 rounded-full blur-[150px]" />
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge mb-4">Capacitación</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Aprende a usar IA en tu trabajo real
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              No basta con instalar herramientas. La adopción ocurre cuando las personas
              entienden cómo aplicar IA en sus tareas diarias.
            </p>

            <a
              href={LINKS.whatsappDiagnostico}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quiero capacitarme
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {blocks.map(({ icon: Icon, text }) => (
              <div key={text} className="glass-card flex items-start gap-3">
                <div className="w-10 h-10 rounded-card glass-raised flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <p className="text-sm text-text leading-snug pt-1.5">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
