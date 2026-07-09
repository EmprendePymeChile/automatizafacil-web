import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = 'https://automatizafacil.org';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'AutomatizaFácil.org | Automatización con IA para pymes y profesionales',
  description:
    'Automatiza procesos, atención, ventas y tareas repetitivas con inteligencia artificial. Asistentes IA, agentes autónomos, mini SaaS, IA en nube, local y VPS para pymes y profesionales.',
  keywords: [
    'automatización con IA',
    'inteligencia artificial para pymes',
    'asistentes IA',
    'agentes IA',
    'mini SaaS Chile',
    'automatización WhatsApp',
    'IA para profesionales',
    'IA local VPS',
    'EmprendePyme',
    'AutomatizaFácil',
    'IA para negocios',
    'automatización de procesos',
  ],
  authors: [{ name: 'Roberto Sáez Lafourcade' }],
  creator: 'EmprendePyme.cl',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: SITE_URL,
    siteName: 'AutomatizaFácil.org',
    title: 'Automatiza tu negocio con IA',
    description:
      'Asistentes, agentes, automatización y mini SaaS para pymes y profesionales.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AutomatizaFácil.org - IA aplicada para pymes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatiza tu negocio con IA',
    description:
      'Asistentes, agentes, automatización y mini SaaS para pymes y profesionales.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'AutomatizaFácil.org',
      url: SITE_URL,
      description:
        'División de IA aplicada, automatización y mini SaaS de EmprendePyme.cl',
      founder: {
        '@type': 'Person',
        name: 'Roberto Sáez Lafourcade',
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'EmprendePyme.cl',
        url: 'https://emprendepyme.cl/',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Osorno',
        addressCountry: 'CL',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'AutomatizaFácil.org',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'es-CL',
    },
    {
      '@type': 'Service',
      name: 'Soluciones de IA y Automatización',
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'Inteligencia artificial aplicada y automatización',
      areaServed: ['CL', 'LATAM'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IA en la nube' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IA privada, local y VPS' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asistentes IA especializados' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentes IA autónomos' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatización comercial y WhatsApp' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Capacitación y adopción IA' } },
        ],
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'E-Jurídico IA',
      applicationCategory: 'LegalTech',
      operatingSystem: 'Web',
      url: 'https://ejuridico.automatizafacil.org/',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CLP' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'LiciRadar',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://liciradar.automatizafacil.org/',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CLP' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'FondoRadar',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://fondoradar.automatizafacil.org/',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CLP' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'TributaRadar',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://tributaradar.automatizafacil.org/',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CLP' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿AutomatizaFácil vende solo chatbots?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Diseñamos asistentes, agentes, automatizaciones, mini SaaS, integraciones y capacitación. Un chatbot puede ser parte de la solución, pero no es el único enfoque.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Necesito saber programar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Nosotros diseñamos e implementamos la solución. También podemos capacitarte para que uses IA de forma práctica.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo usar IA con datos privados?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Según el caso, podemos evaluar soluciones en nube, entornos privados, local o VPS, considerando seguridad, costos y nivel técnico requerido.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre asistente y agente IA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un asistente se enfoca en una tarea específica. Un agente puede coordinar múltiples acciones, conectar herramientas y ejecutar procesos más completos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Trabajan con pymes pequeñas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. El foco está en soluciones escalables: partir simple, medir resultados y crecer según necesidad.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Pueden construir una herramienta tipo mini SaaS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Podemos diseñar prototipos, MVPs, paneles internos y herramientas web con integración de IA.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Atienden solo Chile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El foco principal es Chile, especialmente pymes y profesionales, pero las soluciones pueden adaptarse a clientes de LATAM.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-midnight font-sans text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
