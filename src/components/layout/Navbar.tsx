'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Zap, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-white">
            Automatiza<span className="text-cyan">Fácil</span>.org
          </span>
          <span className="text-xs text-text-muted">by EmprendePyme.cl</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-text-muted hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={LINKS.whatsappDirecto}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href={LINKS.whatsappDiagnostico}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <Zap className="w-4 h-4" />
            Agenda diagnóstico
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t">
          <ul className="container-max flex flex-col gap-1 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-text-muted hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={LINKS.whatsappDiagnostico}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <Zap className="w-4 h-4" />
                Agenda diagnóstico
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
