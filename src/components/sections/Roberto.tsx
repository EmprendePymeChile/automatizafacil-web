import { Briefcase, Bot, MessageSquare, GraduationCap, FileText, TrendingUp, Check, ExternalLink } from 'lucide-react';
import { LINKS, IMAGES, ROBERTO_METRICS } from '@/lib/constants';

const points = [
  { icon: Briefcase, text: 'Experiencia en desarrollo y crecimiento de pymes' },
  { icon: TrendingUp, text: 'Automatización de procesos' },
  { icon: Bot, text: 'Asistentes IA personalizados' },
  { icon: MessageSquare, text: 'Agentes IA multitarea' },
  { icon: FileText, text: 'Marketing digital y embudos' },
  { icon: GraduationCap, text: 'Capacitación y adopción tecnológica' },
];

export default function Roberto() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="glass-card rounded-panel p-8 md:p-12">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Avatar */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-panel bg-cyan/20 blur-2xl" />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-panel glass-raised border-2 border-cyan/30 flex items-center justify-center overflow-hidden">
                  {IMAGES.roberto ? (
                    <img
                      src={IMAGES.roberto}
                      alt="Roberto Sáez Lafourcade"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="avatarGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#14f5c6" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <rect width="200" height="200" fill="url(#avatarGrad2)" />
                      <circle cx="100" cy="75" r="32" fill="#cbd5e1" opacity="0.8" />
                      <path d="M 40 200 Q 40 130 100 130 Q 160 130 160 200" fill="#cbd5e1" opacity="0.6" />
                      <text x="100" y="185" textAnchor="middle" fill="#22d3ee" fontSize="14" fontFamily="Inter">
                        Roberto Sáez L.
                      </text>
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Una división IA creada desde la experiencia real con pymes
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                AutomatizaFácil.org nace como una línea especializada de EmprendePyme.cl,
                liderada por <span className="text-white font-medium">Roberto Sáez Lafourcade</span>,
                para llevar inteligencia artificial, automatización y desarrollo de herramientas
                digitales a pymes, profesionales y organizaciones que necesitan resultados prácticos.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {points.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm text-text">
                    <Check className="w-4 h-4 text-greencyan shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="space-y-3 mb-6">
                {/* Fila IA */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-cyan w-28 shrink-0">IA y automatización</span>
                  <div className="flex-1 grid grid-cols-3 gap-2">
                    <div className="glass rounded-card px-3 py-2 text-center">
                      <div className="text-base font-bold text-cyan">{ROBERTO_METRICS.ia.clients}</div>
                      <div className="text-xs text-text-muted">clientes</div>
                    </div>
                    <div className="glass rounded-card px-3 py-2 text-center">
                      <div className="text-base font-bold text-greencyan">{ROBERTO_METRICS.ia.projects}</div>
                      <div className="text-xs text-text-muted">proyectos</div>
                    </div>
                    <div className="glass rounded-card px-3 py-2 text-center">
                      <div className="text-base font-bold text-orange">{ROBERTO_METRICS.ia.satisfaction}</div>
                      <div className="text-xs text-text-muted">satisfacción</div>
                    </div>
                  </div>
                </div>

                {/* Fila EmprendePyme general */}
                <div className="flex items-center gap-4">
                  <a
                    href={LINKS.emprendepyme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-orange w-28 shrink-0 hover:underline"
                  >
                    EmprendePyme.cl
                  </a>
                  <div className="flex-1 grid grid-cols-3 gap-2">
                    <div className="glass rounded-card px-3 py-2 text-center">
                      <div className="text-base font-bold text-text">{ROBERTO_METRICS.emprendepyme.clients}</div>
                      <div className="text-xs text-text-muted">clientes totales</div>
                    </div>
                    <div className="glass rounded-card px-3 py-2 text-center">
                      <div className="text-base font-bold text-text">{ROBERTO_METRICS.emprendepyme.projects}</div>
                      <div className="text-xs text-text-muted">proyectos totales</div>
                    </div>
                    <div className="glass rounded-card px-3 py-2 text-center">
                      <div className="text-base font-bold text-text">Equipo {ROBERTO_METRICS.emprendepyme.team}</div>
                      <div className="text-xs text-text-muted">personas</div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={LINKS.emprendepyme}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Conoce EmprendePyme.cl
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
