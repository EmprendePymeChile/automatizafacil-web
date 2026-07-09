import { Clock, TrendingDown, AlertCircle, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { PROBLEM_PAINS } from '@/lib/constants';

const painIcons = [Clock, TrendingDown, AlertCircle, FileSpreadsheet];

export default function Problem() {
  return (
    <section className="section-padding relative">
      <div className="container-max">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tu negocio no necesita más herramientas sueltas.
            <br />
            <span className="text-gradient-cyan">Necesita un sistema.</span>
          </h2>
          <p className="text-text leading-relaxed">
            Muchas pymes y profesionales ya usan IA, pero de forma desordenada:
            copian y pegan en chats, pierden información, atienden tarde, no hacen
            seguimiento y siguen dependiendo de procesos manuales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROBLEM_PAINS.map((pain, i) => {
            const Icon = painIcons[i];
            return (
              <div key={pain} className="glass-card text-center">
                <div className="w-12 h-12 rounded-card glass-raised flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-orange" />
                </div>
                <p className="text-sm text-white font-medium leading-snug">{pain}</p>
              </div>
            );
          })}
        </div>

        <div className="glass-card rounded-panel p-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-white leading-relaxed">
            <span className="text-cyan font-semibold">AutomatizaFácil</span> conecta IA,
            procesos y estrategia para convertir tareas sueltas en{' '}
            <span className="text-greencyan font-semibold">sistemas que trabajan contigo</span>.
          </p>
          <a href="#soluciones" className="btn-secondary mt-6 inline-flex">
            Ver soluciones
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
