import { Cloud, Server, Bot, Cpu, MessageCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { SOLUTIONS } from '@/lib/constants';

const iconMap = { Cloud, Server, Bot, Cpu, MessageCircle, GraduationCap };

export default function Solutions() {
  return (
    <section id="soluciones" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="badge mb-4">Soluciones</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Soluciones de IA para operar mejor, vender más
            <br className="hidden md:block" /> y escalar sin sumar más carga manual
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map(({ icon, title, description }) => {
            const Icon = iconMap[icon as keyof typeof iconMap];
            return (
              <div key={title} className="glass-card group">
                <div className="w-12 h-12 rounded-card glass-raised flex items-center justify-center mb-5 group-hover:glow-cyan transition-all duration-300">
                  <Icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-5">{description}</p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm text-cyan hover:text-cyan-soft transition-colors"
                >
                  Ver más
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
