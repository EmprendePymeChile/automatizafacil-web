import { Play, Calendar, Clock, Check } from 'lucide-react';
import { LINKS } from '@/lib/constants';

const bullets = [
  'Automatización de atención y procesos',
  'Asistentes y agentes IA especializados',
  'Marketing, leads y adopción de IA',
];

export default function VideoSection() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ve en 90 segundos cómo automatizamos negocios con IA
          </h2>
          <p className="text-text">
            Una explicación breve de nuestra línea de soluciones: IA, automatización,
            asistentes, agentes, marketing y capacitación para pymes y profesionales.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Video iframe */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video rounded-panel overflow-hidden glass-raised glow-cyan">
              <iframe
                src={LINKS.videoYoutube}
                title="AutomatizaFácil - Soluciones IA para pymes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Bullets + CTAs */}
          <div className="lg:col-span-2 space-y-6">
            <ul className="space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full glass flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-greencyan" />
                  </div>
                  <span className="text-text">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <a
                href={LINKS.whatsappDiagnostico}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-start"
              >
                <Play className="w-4 h-4" />
                Agenda diagnóstico gratuito
              </a>
              <a
                href={LINKS.asesoriaPagada}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-start"
              >
                <Clock className="w-4 h-4 text-orange" />
                Agendar asesoría pagada (60 min)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
