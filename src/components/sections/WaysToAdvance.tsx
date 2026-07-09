import { Gift, Clock, LayoutGrid, ArrowRight } from 'lucide-react';
import { LINKS } from '@/lib/constants';

const options = [
  {
    icon: Gift,
    title: 'Diagnóstico IA gratuito',
    duration: '15 minutos',
    text: 'Revisamos tu caso, detectamos oportunidades de automatización y te orientamos sobre el mejor punto de partida.',
    cta: 'Agendar gratis',
    href: LINKS.whatsappDiagnostico,
    highlight: true,
  },
  {
    icon: Clock,
    title: 'Asesoría estratégica pagada',
    duration: '60 minutos',
    text: 'Sesión profunda para ordenar tu estrategia, revisar procesos, definir herramientas, priorizar acciones y construir una hoja de ruta aplicable.',
    cta: 'Agendar asesoría',
    href: LINKS.asesoriaPagada,
    highlight: false,
  },
  {
    icon: LayoutGrid,
    title: 'Explorar mini SaaS',
    duration: 'Explora',
    text: 'Explora nuestros mini SaaS para fondos, licitaciones, gestión jurídica, tributaria y automatización de procesos.',
    cta: 'Ver herramientas',
    href: '#mini-saas',
    highlight: false,
  },
];

export default function WaysToAdvance() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Elige cómo avanzar</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {options.map((opt) => (
            <div
              key={opt.title}
              className={`glass-card rounded-panel flex flex-col ${
                opt.highlight ? 'ring-1 ring-cyan/40 glow-cyan' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-card glass-raised flex items-center justify-center">
                  <opt.icon className="w-6 h-6 text-cyan" />
                </div>
                <span className="badge text-xs">{opt.duration}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">{opt.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">{opt.text}</p>

              <a
                href={opt.href}
                target={opt.href.startsWith('http') ? '_blank' : undefined}
                rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={opt.highlight ? 'btn-primary text-sm self-start' : 'btn-secondary text-sm self-start'}
              >
                {opt.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
