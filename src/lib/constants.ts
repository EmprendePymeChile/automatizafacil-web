// ============================================================
//  AutomatizaFácil.org — Constantes
//  Lee configuración desde .env (NEXT_PUBLIC_*).
//  NOTA: Usa process.env.NEXT_PUBLIC_* directamente (no lo asignes
//  a una variable) para que Next.js lo inlinee en el build.
// ============================================================

// --- WhatsApp ---
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56981492346';
const WHATSAPP_MSG =
  process.env.NEXT_PUBLIC_WHATSAPP_MSG ||
  'Hola Roberto, quiero agendar un diagnóstico gratuito de 15 minutos para revisar qué puedo automatizar con IA en mi negocio.';

// --- Video YouTube ---
const VIDEO_ID = process.env.NEXT_PUBLIC_VIDEO_YOUTUBE_ID || 'OptrDLFZHoA';

// --- Enlaces externos ---
const LINK_ASESORIA = process.env.NEXT_PUBLIC_LINK_ASESORIA || 'https://emprendepyme.cl/asesoria-abierta/';
const LINK_EMPRENDEPyme = process.env.NEXT_PUBLIC_LINK_EMPRENDEPyme || 'https://emprendepyme.cl/';

// --- Mini SaaS URLs ---
const LINK_EJURIDICO = process.env.NEXT_PUBLIC_LINK_EJURIDICO || 'https://ejuridico.automatizafacil.org/';
const LINK_LICIRADAR = process.env.NEXT_PUBLIC_LINK_LICIRADAR || 'https://liciradar.automatizafacil.org/';
const LINK_FONDORADAR = process.env.NEXT_PUBLIC_LINK_FONDORADAR || 'https://fondoradar.automatizafacil.org/';
const LINK_TRIBUTARADAR = process.env.NEXT_PUBLIC_LINK_TRIBUTARADAR || 'https://tributaradar.automatizafacil.org/';

// --- Imágenes (vacío = placeholder SVG) ---
const IMG_ROBERTO = process.env.NEXT_PUBLIC_IMG_ROBERTO || '';
const IMG_EJURIDICO = process.env.NEXT_PUBLIC_IMG_EJURIDICO || '';
const IMG_LICIRADAR = process.env.NEXT_PUBLIC_IMG_LICIRADAR || '';
const IMG_FONDORADAR = process.env.NEXT_PUBLIC_IMG_FONDORADAR || '';
const IMG_TRIBUTARADAR = process.env.NEXT_PUBLIC_IMG_TRIBUTARADAR || '';
const IMG_EMPRENDEPyme = process.env.NEXT_PUBLIC_IMG_EMPRENDEPYME || '';
const IMG_HERO = process.env.NEXT_PUBLIC_IMG_HERO || '';

// --- Contacto ---
const CONTACTO_CIUDAD = process.env.NEXT_PUBLIC_CONTACTO_CIUDAD || 'Osorno, Chile';
const CONTACTO_MODO = process.env.NEXT_PUBLIC_CONTACTO_MODO || 'Atención online';
const CONTACTO_DIRECCION = process.env.NEXT_PUBLIC_CONTACTO_DIRECCION || '';
const CONTACTO_EMAIL = process.env.NEXT_PUBLIC_CONTACTO_EMAIL || 'rsaez@emprendepyme.cl';

// ============================================================
//  Exports
// ============================================================

export const WHATSAPP = {
  number: WHATSAPP_NUMBER,
  message: WHATSAPP_MSG,
};

export const LINKS = {
  whatsappDiagnostico: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`,
  whatsappDirecto: `https://wa.me/${WHATSAPP_NUMBER}`,
  asesoriaPagada: LINK_ASESORIA,
  emprendepyme: LINK_EMPRENDEPyme,
  videoYoutube: `https://www.youtube.com/embed/${VIDEO_ID}`,
  videoYoutubeOriginal: `https://youtube.com/shorts/${VIDEO_ID}`,
} as const;

export const IMAGES = {
  roberto: IMG_ROBERTO,
  hero: IMG_HERO,
  ejuridico: IMG_EJURIDICO,
  liciradar: IMG_LICIRADAR,
  fondoradar: IMG_FONDORADAR,
  tributaradar: IMG_TRIBUTARADAR,
  emprendepyme: IMG_EMPRENDEPyme,
} as const;

export const CONTACT = {
  ciudad: CONTACTO_CIUDAD,
  modo: CONTACTO_MODO,
  direccion: CONTACTO_DIRECCION,
  email: CONTACTO_EMAIL,
} as const;

export const SOCIAL = {
  instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || '',
  facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || '',
  youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || '',
  google: process.env.NEXT_PUBLIC_SOCIAL_GOOGLE || '',
  maps: process.env.NEXT_PUBLIC_SOCIAL_MAPS || '',
  review: process.env.NEXT_PUBLIC_SOCIAL_REVIEW || '',
} as const;

export const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Mini SaaS', href: '#mini-saas' },
  { label: 'Asistentes IA', href: '#asistentes-agentes' },
  { label: 'Capacitación', href: '#capacitacion' },
  { label: 'Gratis', href: '#herramientas' },
  { label: 'Casos', href: '#casos' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export type ProductStatus = 'Operativo' | 'Beta' | 'Demo' | 'En desarrollo';

export const MINI_SAAS_PRODUCTS = [
  {
    name: 'E-Jurídico IA',
    url: LINK_EJURIDICO,
    image: IMG_EJURIDICO,
    category: 'LegalTech / Asistente jurídico',
    problem: 'Apoya la revisión, consulta y productividad jurídica para profesionales, estudios y usuarios que necesitan orientación documental. Acceso mediante solicitud (WhatsApp o correo).',
    audience: 'Abogados, estudios jurídicos, profesionales y usuarios que trabajan con documentación legal.',
    status: 'Demo' as ProductStatus,
    cta: 'Abrir E-Jurídico',
    color: '#22d3ee',
  },
  {
    name: 'LiciRadar',
    url: LINK_LICIRADAR,
    image: IMG_LICIRADAR,
    category: 'Licitaciones / Oportunidades públicas',
    problem: 'Ayuda a identificar, ordenar y priorizar oportunidades de licitación o contratación pública.',
    audience: 'Pymes, proveedores del Estado, consultores y empresas que buscan oportunidades públicas.',
    status: 'Operativo' as ProductStatus,
    cta: 'Probar gratis',
    color: '#14f5c6',
  },
  {
    name: 'FondoRadar',
    url: LINK_FONDORADAR,
    image: IMG_FONDORADAR,
    category: 'Fondos públicos / Postulación asistida',
    problem: 'Radar de fondos para Chile con perfilamiento IA controlado, priorización de oportunidades, checklist, brechas y ruta de postulación revisable por humanos.',
    audience: 'Emprendedores, pymes, organizaciones, consultores y postulantes a fondos públicos.',
    status: 'Beta' as ProductStatus,
    cta: 'Probar gratis',
    color: '#22d3ee',
  },
  {
    name: 'TributaRadar',
    url: LINK_TRIBUTARADAR,
    image: IMG_TRIBUTARADAR,
    category: 'Tributario / Gestión pyme',
    problem: 'Apoya consultas, revisión y procesos vinculados a gestión tributaria para pymes, profesionales y negocios en crecimiento.',
    audience: 'Pymes, contadores, emprendedores y profesionales que necesitan apoyo tributario.',
    status: 'Beta' as ProductStatus,
    cta: 'Abrir TributaRadar',
    color: '#14f5c6',
  },
  {
    name: 'EmprendePyme.cl',
    url: LINK_EMPRENDEPyme,
    image: IMG_EMPRENDEPyme,
    category: 'Empresa madre / Consultoría pyme',
    problem: 'Plataforma principal de asesoría, desarrollo de negocios, automatización, marketing, postulación a proyectos y crecimiento para pymes.',
    audience: 'Emprendedores, pymes, profesionales y empresas pequeñas.',
    status: 'Operativo' as ProductStatus,
    cta: 'Conocer EmprendePyme',
    color: '#f97316',
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: '¿AutomatizaFácil vende solo chatbots?',
    a: 'No. Diseñamos asistentes, agentes, automatizaciones, mini SaaS, integraciones y capacitación. Un chatbot puede ser parte de la solución, pero no es el único enfoque.',
  },
  {
    q: '¿Necesito saber programar?',
    a: 'No. Nosotros diseñamos e implementamos la solución. También podemos capacitarte para que uses IA de forma práctica.',
  },
  {
    q: '¿Puedo usar IA con datos privados?',
    a: 'Sí. Según el caso, podemos evaluar soluciones en nube, entornos privados, local o VPS, considerando seguridad, costos y nivel técnico requerido.',
  },
  {
    q: '¿Qué diferencia hay entre asistente y agente IA?',
    a: 'Un asistente se enfoca en una tarea específica. Un agente puede coordinar múltiples acciones, conectar herramientas y ejecutar procesos más completos.',
  },
  {
    q: '¿Trabajan con pymes pequeñas?',
    a: 'Sí. El foco está en soluciones escalables: partir simple, medir resultados y crecer según necesidad.',
  },
  {
    q: '¿Pueden construir una herramienta tipo mini SaaS?',
    a: 'Sí. Podemos diseñar prototipos, MVPs, paneles internos y herramientas web con integración de IA.',
  },
  {
    q: '¿Atienden solo Chile?',
    a: 'El foco principal es Chile, especialmente pymes y profesionales, pero las soluciones pueden adaptarse a clientes de LATAM.',
  },
] as const;

export const SOLUTIONS = [
  {
    icon: 'Cloud',
    title: 'IA en la nube',
    description: 'Configuramos flujos con plataformas de IA, APIs y herramientas cloud para acelerar tareas, analizar información, crear contenido, generar reportes y apoyar decisiones.',
  },
  {
    icon: 'Server',
    title: 'IA privada, local y VPS',
    description: 'Desplegamos soluciones en entornos controlados cuando necesitas mayor privacidad, disponibilidad o control técnico: local, servidores privados y VPS.',
  },
  {
    icon: 'Bot',
    title: 'Asistentes IA especializados',
    description: 'Asistentes diseñados para tareas concretas: responder consultas, generar documentos, apoyar ventas, guiar clientes, revisar información o entregar soporte.',
  },
  {
    icon: 'Cpu',
    title: 'Agentes IA autónomos',
    description: 'Agentes capaces de coordinar múltiples pasos, conectar herramientas, consultar datos, ejecutar acciones y apoyar procesos completos.',
  },
  {
    icon: 'MessageCircle',
    title: 'Automatización comercial y WhatsApp',
    description: 'Flujos para captar, responder, calificar y dar seguimiento a clientes potenciales, conectando formularios, WhatsApp, CRM, email y reportes.',
  },
  {
    icon: 'GraduationCap',
    title: 'Capacitación y adopción IA',
    description: 'Talleres y acompañamiento para que equipos y profesionales aprendan a usar IA en su trabajo real, no solo como teoría.',
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Identificamos tareas repetitivas, cuellos de botella, datos disponibles, flujos comerciales y oportunidades de automatización.',
  },
  {
    number: '02',
    title: 'Arquitectura IA',
    description: 'Definimos si conviene nube, API, local, VPS, asistente, agente, mini SaaS o una combinación híbrida.',
  },
  {
    number: '03',
    title: 'Implementación',
    description: 'Construimos, conectamos e integramos la solución con tus herramientas: web, WhatsApp, formularios, planillas, CRM, documentos o bases de datos.',
  },
  {
    number: '04',
    title: 'Adopción y mejora',
    description: 'Capacitamos, medimos, ajustamos y dejamos una ruta de mejora para que la solución se use en la operación real.',
  },
] as const;

export const PROBLEM_PAINS = [
  'Pierdes horas en tareas repetitivas',
  'Los leads llegan, pero no se gestionan',
  'Tu atención depende de estar conectado',
  'Tu información está dispersa en planillas, correos y documentos',
] as const;

export const NEWS_ENABLED = process.env.NEXT_PUBLIC_NEWS_ENABLED === 'true';
export const NEWS_MAX_ITEMS = parseInt(process.env.NEXT_PUBLIC_NEWS_MAX_ITEMS || '3', 10);
export const NEWS_SOURCE = process.env.NEXT_PUBLIC_NEWS_SOURCE || 'https://emprendepyme.cl/blog/';

export const NEWS_ITEMS = [
  {
    title: 'Nuevas herramientas IA para pymes chilenas',
    date: 'Julio 2026',
    summary: 'Explora cómo las soluciones de inteligencia artificial están transformando la operación de pequeñas y medianas empresas en Chile.',
    url: 'https://emprendepyme.cl/blog/',
  },
  {
    title: 'Automatización de procesos: guía práctica 2026',
    date: 'Junio 2026',
    summary: 'Una guía paso a paso para identificar qué procesos de tu negocio puedes automatizar y cómo empezar sin conocimientos técnicos.',
    url: 'https://emprendepyme.cl/blog/',
  },
  {
    title: 'FondoRadar: encuentra fondos públicos para tu empresa',
    date: 'Junio 2026',
    summary: 'Conoce cómo el radar de fondos públicos con IA está ayudando a emprendedores a identificar y postular a oportunidades de financiamiento.',
    url: 'https://emprendepyme.cl/blog/',
  },
];

export const TOOLS_ENABLED = process.env.NEXT_PUBLIC_TOOLS_ENABLED === 'true';
export const TOOLS_URL = process.env.NEXT_PUBLIC_TOOLS_URL || 'https://emprendepyme.cl/herramientas-gratis-para-tu-emprendimiento/';

export const FREE_TOOLS = [
  {
    icon: 'Calculator',
    title: 'Calculadoras de negocio',
    description: 'Calculadoras de margen, punto de equilibrio, rentabilidad y proyecciones financieras para tu emprendimiento.',
  },
  {
    icon: 'FileText',
    title: 'Generadores de documentos',
    description: 'Plantillas y generadores para contratos, cotizaciones, facturas y documentos administrativos.',
  },
  {
    icon: 'Megaphone',
    title: 'Herramientas de marketing',
    description: 'Generadores de copy, analizadores de redes sociales y calculadoras de alcance para tus campañas.',
  },
  {
    icon: 'BarChart3',
    title: 'Dashboards de gestión',
    description: 'Tableros simples para controlar ventas, gastos, inventario y KPIs de tu negocio en un solo lugar.',
  },
  {
    icon: 'Bot',
    title: 'Asistentes IA gratuitos',
    description: 'Prueba asistentes de IA pre-entrenados para tareas comunes: atención al cliente, cotizaciones y seguimiento.',
  },
  {
    icon: 'GraduationCap',
    title: 'Guías y recursos',
    description: 'Guías paso a paso, checklists y recursos descargables para formalizar, postular a fondos y crecer.',
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Sensaciones del Sur',
    role: 'Retail / Moda',
    text: 'Logramos posicionar la marca desde 0 hasta sobre los 27 mil seguidores en Instagram, así como también implementar un sistema automatizado de venta en línea y presencial en simultáneo, todo interconectado a través de un inventario con códigos de barra.',
    result: '27k seguidores + sistema POS integrado',
  },
  {
    name: 'E-Juridico.cl',
    role: 'LegalTech / Bufete de abogados',
    text: 'Excelente servicio de construcción de página web. Le pedí una página web sencilla, versátil y económica para comenzar y lo logró. Además implementamos automatización de WhatsApp, embudos de ventas, asistentes especializados para su bufete de abogados, y agentes IA capaces de atender clientes y coordinar múltiples tareas simultáneamente.',
    result: 'Web + WhatsApp IA + asistentes + agentes',
  },
  {
    name: 'Palomitas del Sur',
    role: 'Retail / Alimentación',
    text: 'Implementamos un sistema automatizado de venta en línea y presencial en simultáneo, todo interconectado a través de un inventario con códigos de barra, permitiendo tener un excelente control y manejo en tiempo real del negocio.',
    result: 'Sistema POS + inventario integrado',
  },
  {
    name: 'EmprendePyme.cl',
    role: 'Automatización real probada',
    text: 'Nuestro propio WhatsApp está automatizado: agenda reuniones, envía notificaciones personalizadas, escucha y procesa audios, y mantiene conversaciones con clientes las 24 horas. Una herramienta que construimos para nosotros y ahora ofrecemos a nuestros clientes. Toca el botón verde de WhatsApp que ves en esta página y compruébalo tú mismo.',
    result: 'WhatsApp IA: agenda + notificaciones + audios',
  },
  {
    name: 'María G.',
    role: 'Tienda online',
    text: 'Automatizamos toda la atención de clientes con un asistente IA en WhatsApp. Ahora los pedidos se confirman solos y nuestros clientes reciben respuesta en segundos, incluso fuera de horario.',
    result: 'Atención 24/7 automatizada',
  },
  {
    name: 'Carlos R.',
    role: 'Servicios profesionales',
    text: 'Necesitaba una web con reservas automáticas. Me construyeron el sitio con un sistema de agendamiento que se sincroniza con mi calendario. Ya no pierdo citas ni tengo que confirmar manualmente.',
    result: 'Web + reservas inteligentes',
  },
  {
    name: 'Laura M.',
    role: 'Distribuidora',
    text: 'Implementamos un sistema que procesa pedidos por WhatsApp y los envía directo a bodega. Pasamos de 2 horas diarias de gestión manual a 15 minutos con todo automatizado.',
    result: 'Pedidos automatizados',
  },
] as const;

export const ROBERTO_METRICS = {
  ia: { clients: '16+', projects: '25+', satisfaction: '100%' },
  emprendepyme: { clients: '149+', projects: '107+', satisfaction: '100%', team: '5' },
};
