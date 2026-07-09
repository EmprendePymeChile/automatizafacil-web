import { ExternalLink, Calendar } from 'lucide-react';

interface NewsItem {
  title: string;
  date: string;
  summary: string;
  url: string;
  image?: string;
}

interface Props {
  items: NewsItem[];
}

export default function NewsSection({ items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="badge mb-4">Noticias</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo último de{' '}
            <a
              href="https://emprendepyme.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient-cyan hover:opacity-80 transition-opacity"
            >
              EmprendePyme.cl
            </a>
          </h2>
          <p className="text-text-muted">
            Artículos, novedades y recursos para pymes y profesionales
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-panel group flex flex-col"
            >
              {item.image && (
                <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-panel">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5 line-clamp-3">
                {item.summary}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-cyan group-hover:text-cyan-soft transition-colors">
                Leer artículo
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
