import { Bot, Cpu, ArrowRight, Check } from 'lucide-react';
import { LINKS } from '@/lib/constants';

const assistants = [
  'Asistente legal',
  'Asistente tributario',
  'Asistente comercial',
  'Asistente de atención',
  'Asistente de contenidos',
];

const agents = [
  'Agente de leads',
  'Agente de postulación',
  'Agente de seguimiento',
  'Agente documental',
  'Agente de soporte interno',
];

export default function AssistantVsAgent() {
  return (
    <section id="asistentes-agentes" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="badge mb-4">Asistentes vs Agentes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            No todos los bots son iguales:
            <br className="hidden md:block" />
            <span className="text-gradient-cyan"> asistentes para tareas, agentes para procesos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Asistentes IA */}
          <div className="glass-card rounded-panel">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-card glass-raised flex items-center justify-center">
                <Bot className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white">Asistentes IA especializados</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Un asistente IA especializado resuelve una tarea concreta con precisión:
              responder preguntas, generar documentos, revisar bases, orientar clientes
              o apoyar a un equipo.
            </p>
            <ul className="space-y-3">
              {assistants.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-text">
                  <div className="w-5 h-5 rounded-full glass flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-cyan" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Agentes IA */}
          <div className="glass-card rounded-panel">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-card glass-raised flex items-center justify-center">
                <Cpu className="w-6 h-6 text-greencyan" />
              </div>
              <h3 className="text-xl font-semibold text-white">Agentes IA autónomos</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Un agente IA puede coordinar varias acciones: analizar información, decidir
              el siguiente paso, conectar herramientas, activar flujos, generar respuestas
              y registrar resultados.
            </p>
            <ul className="space-y-3">
              {agents.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-text">
                  <div className="w-5 h-5 rounded-full glass flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-greencyan" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href={LINKS.whatsappDiagnostico}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quiero diseñar mi asistente o agente
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
