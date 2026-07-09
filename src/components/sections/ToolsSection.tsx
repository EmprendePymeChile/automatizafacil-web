import { ExternalLink, Calculator, FileText, Megaphone, BarChart3, Bot, GraduationCap } from 'lucide-react';
import { FREE_TOOLS, TOOLS_URL } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator, FileText, Megaphone, BarChart3, Bot, GraduationCap,
};

export default function ToolsSection() {
  return (
    <section id="herramientas" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="badge mb-4">Gratis</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Herramientas gratuitas para tu emprendimiento
          </h2>
          <p className="text-text-muted">
            Calculadoras, generadores, asistentes IA y recursos que puedes empezar
            a usar hoy. Sin costo, sin registro, sin compromiso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {FREE_TOOLS.map((tool) => {
            const Icon = iconMap[tool.icon];
            return (
              <div key={tool.title} className="glass-card flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-card glass-raised flex items-center justify-center shrink-0 group-hover:glow-cyan transition-all duration-300">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{tool.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{tool.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={TOOLS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Explorar todas las herramientas gratis
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
