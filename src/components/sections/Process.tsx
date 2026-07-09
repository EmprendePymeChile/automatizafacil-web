import { PROCESS_STEPS } from '@/lib/constants';

export default function Process() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="badge mb-4">Proceso</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            De idea a sistema funcionando
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-cyan/20 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full glass-raised border-2 border-cyan flex items-center justify-center glow-cyan">
                    <span className="text-lg font-bold text-cyan">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 pl-24 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                  <div className="glass-card rounded-panel">
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
