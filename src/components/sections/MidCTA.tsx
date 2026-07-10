import { Zap, ArrowRight } from 'lucide-react';
import { LINKS } from '@/lib/constants';

export default function MidCTA() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-max">
        <div className="relative glass-card rounded-panel p-8 md:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-orange/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              {/* Timer visual: 2H → 20M */}
              <div className="glass-raised rounded-card px-6 py-3 flex items-center gap-3">
                <span className="text-2xl font-bold text-text-muted line-through opacity-60">2H</span>
                <Zap className="w-5 h-5 text-orange" />
                <span className="text-2xl font-bold text-cyan">20M</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Tu negocio depende demasiado de ti?
            </h2>
            <p className="text-text leading-relaxed mb-8">
              Si tu atención, ventas, reportes o seguimiento se detienen cuando tú no estás,
              tienes una oportunidad clara de automatización.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={LINKS.whatsappDiagnostico}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <Zap className="w-5 h-5" />
                Agenda diagnóstico gratuito
              </a>
              <a href="#mini-saas" className="btn-secondary">
                Explorar herramientas IA
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                Menos tareas
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-greencyan" />
                Más clientes
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                Mejor atención
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
