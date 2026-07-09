import { Zap, Instagram, Facebook, Youtube, MapPin, Star } from 'lucide-react';
import { LINKS, SOCIAL, CONTACT } from '@/lib/constants';

export default function Footer() {
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Mini SaaS', href: '#mini-saas' },
    { label: 'Capacitación', href: '#capacitacion' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const external = [
    { label: 'EmprendePyme.cl', href: LINKS.emprendepyme },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Términos', href: '#' },
  ];

  return (
    <footer className="border-t border-glass-border bg-midnight">
      <div className="container-max px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-card glass flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-white">
                  Automatiza<span className="text-cyan">Fácil</span>.org
                </span>
                <span className="text-xs text-text-muted">by EmprendePyme.cl</span>
              </div>
            </div>
            <p className="text-sm text-text-muted max-w-xs leading-relaxed">
              IA, automatización y mini SaaS para pymes y profesionales.
            </p>
            <p className="text-xs text-text-muted">
              {CONTACT.direccion || `${CONTACT.ciudad} · ${CONTACT.modo}`}
            </p>
          </div>

          {/* Internal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Enlaces</h3>
            <ul className="space-y-3">
              {external.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-text-muted hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-3">
            {SOCIAL.instagram && (
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-cyan hover:border-cyan/30 transition-all" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            )}
            {SOCIAL.facebook && (
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-cyan hover:border-cyan/30 transition-all" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            )}
            {SOCIAL.youtube && (
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-cyan hover:border-cyan/30 transition-all" title="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            )}
            {SOCIAL.maps && (
              <a href={SOCIAL.maps} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-cyan hover:border-cyan/30 transition-all" title="Google Maps">
                <MapPin className="w-4 h-4" />
              </a>
            )}
            {SOCIAL.review && (
              <a href={SOCIAL.review} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-orange hover:border-orange/30 transition-all" title="Califícanos en Google">
                <Star className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-glass-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} AutomatizaFácil.org · Una línea de{' '}
            <a
              href={LINKS.emprendepyme}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              EmprendePyme.cl
            </a>
          </p>
          <p className="text-xs text-text-muted">
            IA aplicada · Soluciones reales · Chile y LATAM
          </p>
        </div>
      </div>
    </footer>
  );
}
