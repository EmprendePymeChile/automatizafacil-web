import { PROCESS_STEPS } from '@/lib/constants';

export default function Process() {
  return (
    <section className="section-padding pb-4 md:pb-8">
      <div className="container-max">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="badge mb-4">RUTA TÉCNICA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cómo construimos la solución
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-xl mx-auto">
            La metodología interna que utilizamos para diseñar, conectar e implementar cada automatización.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="glass-card rounded-panel text-center group">
              <div className="w-14 h-14 rounded-full glass-raised border border-cyan/20 flex items-center justify-center mx-auto mb-4 group-hover:border-cyan/40 transition-colors">
                <span className="text-lg font-bold text-cyan">{step.number}</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
