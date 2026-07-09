import { ExternalLink, Globe } from 'lucide-react';
import { MINI_SAAS_PRODUCTS, IMAGES } from '@/lib/constants';

function StatusBadge({ status }: { status: string }) {
  const color =
    status === 'Operativo'
      ? 'text-greencyan bg-greencyan/10'
      : status === 'En desarrollo'
        ? 'text-orange bg-orange/10'
        : 'text-cyan bg-cyan/10';
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-pill px-2.5 py-0.5 text-xs font-medium ${color}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function BrowserMockup({ name, color, image, domain }: { name: string; color: string; image?: string; domain?: string }) {
  const displayDomain = domain || `${name.toLowerCase().replace(/[^a-z]/g, '')}.automatizafacil.org`;
  return (
    <div className="rounded-card overflow-hidden glass">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-glass-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-danger/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-greencyan/50" />
        </div>
        <div className="flex-1 ml-2 flex items-center gap-1.5 px-2 py-1 rounded-pill glass text-xs text-text-muted">
          <Globe className="w-3 h-3" />
          {displayDomain}
        </div>
      </div>
      {/* Content: image screenshot or SVG mockup */}
      {image ? (
        <img src={image} alt={name} className="w-full h-40 object-cover" />
      ) : (
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-24 rounded-pill" style={{ backgroundColor: color, opacity: 0.4 }} />
            <div className="h-6 w-16 rounded-pill" style={{ backgroundColor: color, opacity: 0.6 }} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-card p-2 space-y-1.5">
                <div className="h-2 w-full rounded-full" style={{ backgroundColor: color, opacity: 0.3 }} />
                <div className="h-3 w-2/3 rounded-full" style={{ backgroundColor: color, opacity: 0.5 }} />
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1.5 h-12">
            {[50, 75, 40, 90, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-pill"
                style={{ height: `${h}%`, backgroundColor: color, opacity: 0.5 }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function MiniSaas() {
  return (
    <section id="mini-saas" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan/5 rounded-full blur-[150px]" />
      <div className="container-max relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="badge mb-4">Mini SaaS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Herramientas IA reales que ya puedes explorar
          </h2>
          <p className="text-text leading-relaxed">
            Desde fondos públicos hasta gestión jurídica, licitaciones y tributación:
            estamos construyendo mini SaaS para resolver problemas concretos de pymes
            y profesionales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MINI_SAAS_PRODUCTS.map((product) => (
            <div key={product.name} className="glass-card group flex flex-col">
              {/* Browser mockup */}
              <div className="mb-5">
                <BrowserMockup name={product.name} color={product.color} image={product.image} domain={product.name === 'EmprendePyme.cl' ? 'emprendepyme.cl' : undefined} />
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                <StatusBadge status={product.status} />
              </div>

              <p className="text-xs text-cyan mb-3 font-medium">{product.category}</p>
              <p className="text-sm text-text-muted leading-relaxed mb-3">{product.problem}</p>
              <p className="text-xs text-text-muted mb-3">
                <span className="text-text">Público:</span> {product.audience}
              </p>

              {product.name === 'E-Jurídico IA' && (
                <div className="glass rounded-card p-3 mb-5 border-l-2 border-cyan/40">
                  <p className="text-xs text-text italic leading-relaxed">
                    &ldquo;Excelente servicio de construcción de página web. Lo recomiendo.&rdquo;
                  </p>
                  <p className="text-xs text-cyan mt-1 font-medium">— E-Juridico.cl, cliente real</p>
                </div>
              )}

              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm mt-auto self-start"
              >
                {product.cta}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
