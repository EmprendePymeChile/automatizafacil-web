import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import MobileStickyBar from '@/components/layout/MobileStickyBar';

import Hero from '@/components/sections/Hero';
import AuthorityStrip from '@/components/sections/AuthorityStrip';
import VideoSection from '@/components/sections/VideoSection';
import Problem from '@/components/sections/Problem';
import Solutions from '@/components/sections/Solutions';
import AssistantVsAgent from '@/components/sections/AssistantVsAgent';
import MiniSaas from '@/components/sections/MiniSaas';
import ConversionAssistant from '@/components/sections/ConversionAssistant';
import Process from '@/components/sections/Process';
import WaysToAdvance from '@/components/sections/WaysToAdvance';
import Roberto from '@/components/sections/Roberto';
import Training from '@/components/sections/Training';
import ToolsSection from '@/components/sections/ToolsSection';
import Testimonials from '@/components/sections/Testimonials';
import NewsSection from '@/components/sections/NewsSection';
import MidCTA from '@/components/sections/MidCTA';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';
import { NEWS_ENABLED, NEWS_ITEMS, TOOLS_ENABLED } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Franja de autoridad */}
        <AuthorityStrip />

        {/* 3. Video corto */}
        <VideoSection />

        {/* 4. Sección problema */}
        <Problem />

        {/* 5. Soluciones principales */}
        <Solutions />

        {/* 6. Asistentes IA vs Agentes IA */}
        <AssistantVsAgent />

        {/* 7. Mini SaaS funcionando */}
        <MiniSaas />

        {/* 8. Sección conversión tipo asistente IA */}
        <ConversionAssistant />

        {/* 9. Proceso de trabajo */}
        <Process />

        {/* 10. Formas de avanzar */}
        <WaysToAdvance />

        {/* 11. Roberto + EmprendePyme */}
        <Roberto />

        {/* 12. Capacitación y cursos */}
        <Training />

        {/* 13. Herramientas gratis (opcional, activar con NEXT_PUBLIC_TOOLS_ENABLED=true) */}
        {TOOLS_ENABLED && <ToolsSection />}

        {/* 14. Testimonios / Casos */}
        <Testimonials />

        {/* 14. Noticias (opcional, activar con NEXT_PUBLIC_NEWS_ENABLED=true) */}
        {NEWS_ENABLED && <NewsSection items={[...NEWS_ITEMS]} />}

        {/* 15. CTA intermedio */}
        <MidCTA />

        {/* 15. FAQ */}
        <FAQ />

        {/* 16. Contacto final */}
        <ContactForm />
      </main>

      <Footer />

      {/* 17. WhatsApp flotante */}
      <FloatingWhatsApp />

      {/* 18. Barra sticky mobile */}
      <MobileStickyBar />
    </>
  );
}
