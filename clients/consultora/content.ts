import type { SiteContent } from '@/types/content';

export const content: SiteContent = {
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso',   href: '#proceso' },
    { label: 'Precios',   href: '#precios' },
    { label: 'Contacto',  href: '#contacto' },
  ],

  hero: {
    title:    'Asesoría empresarial que transforma negocios',
    subtitle: 'Contabilidad, fiscalidad y consultoría estratégica para empresas venezolanas que buscan crecer con solidez.',
    cta:      { label: 'Agendar consulta gratuita', href: '#contacto' },
    bgImage:  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80',
  },

  logoBar: {
    title: 'Empresas que confían en nosotros',
    logos: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',   alt: 'Google' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',             alt: 'Amazon' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png', alt: 'Netflix' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png',           alt: 'Samsung' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Unilevery_logo.svg/1200px-Unilevery_logo.svg.png',      alt: 'Unilever' },
    ],
  },

  services: [
    { title: 'Contabilidad',       description: 'Registros contables, balances, estados financieros y declaraciones de IVA/ISLR al día.',     icon: '📊' },
    { title: 'Asesoría Fiscal',    description: 'Planificación tributaria, cumplimiento de obligaciones y defensa ante el SENIAT.',             icon: '⚖️' },
    { title: 'Auditoría',          description: 'Auditoría interna y externa para garantizar la transparencia de tu empresa.',                  icon: '🔍' },
    { title: 'Nómina y RRHH',      description: 'Cálculo de nómina, prestaciones, vacaciones y cumplimiento de la LOTTT.',                     icon: '👥' },
    { title: 'Constitución de Empresas', description: 'Registro mercantil, RIF, apertura de cuentas y todos los trámites iniciales.',          icon: '📄' },
    { title: 'Consultoría Estratégica', description: 'Planes de negocio, análisis financiero y estrategias de crecimiento a medida.',          icon: '🎯' },
  ],

  processSteps: {
    steps: [
      { number: 1, title: 'Diagnóstico',      description: 'Evaluamos la situación actual de tu empresa sin costo.',         icon: '🔍' },
      { number: 2, title: 'Propuesta',        description: 'Diseñamos un plan de trabajo con objetivos claros y medibles.',  icon: '📋' },
      { number: 3, title: 'Implementación',   description: 'Ejecutamos con nuestro equipo experto de la mano contigo.',      icon: '⚙️' },
      { number: 4, title: 'Seguimiento',      description: 'Reportes mensuales y ajustes continuos para mantener el rumbo.', icon: '📈' },
    ],
  },

  pricing: {
    title:    'Planes de Servicio',
    subtitle: 'Elige el nivel de acompañamiento que tu empresa necesita.',
    plans: [
      {
        name:     'Básico',
        price:    '$180',
        currency: 'USD',
        period:   'mes',
        cta:      { label: 'Comenzar', href: '#contacto' },
        features: [
          { text: 'Contabilidad mensual' },
          { text: 'Declaración de IVA' },
          { text: 'Nómina hasta 5 empleados' },
          { text: 'Soporte por correo' },
          { text: 'Asesoría fiscal proactiva',  included: false },
          { text: 'Auditoría anual',            included: false },
        ],
      },
      {
        name:     'Empresarial',
        price:    '$380',
        currency: 'USD',
        period:   'mes',
        featured: true,
        cta:      { label: 'Elegir Empresarial', href: '#contacto' },
        features: [
          { text: 'Contabilidad mensual' },
          { text: 'Declaración de IVA e ISLR' },
          { text: 'Nómina hasta 20 empleados' },
          { text: 'Soporte prioritario' },
          { text: 'Asesoría fiscal proactiva' },
          { text: 'Auditoría anual',  included: false },
        ],
      },
      {
        name:     'Corporativo',
        price:    '$750',
        currency: 'USD',
        period:   'mes',
        cta:      { label: 'Contactar', href: '#contacto' },
        features: [
          { text: 'Contabilidad mensual' },
          { text: 'Todas las declaraciones' },
          { text: 'Nómina ilimitada' },
          { text: 'Soporte 24/7' },
          { text: 'Asesoría fiscal proactiva' },
          { text: 'Auditoría anual incluida' },
        ],
      },
    ],
  },

  testimonials: [
    {
      name:   'Ing. Rafael Blanco',
      role:   'CEO, Constructora Blanco',
      text:   'Llevamos 4 años con Mendoza & Asociados. Nos han salvado de más de una multa del SENIAT y siempre tienen una solución.',
      avatar: 'https://i.pravatar.cc/80?img=57',
    },
    {
      name:   'Dra. Carmen Lucía Pérez',
      role:   'Directora, Clínica San Rafael',
      text:   'Desde que les delegamos la contabilidad dormimos tranquilos. Son proactivos, nos avisan antes de que haya un problema.',
      avatar: 'https://i.pravatar.cc/80?img=41',
    },
    {
      name:   'Luis Enrique Gutiérrez',
      role:   'Gerente, Distribuidora LG Import',
      text:   'Excelente equipo. Nos ayudaron a estructurar la empresa desde cero y hoy operamos con toda la normativa al día.',
      avatar: 'https://i.pravatar.cc/80?img=69',
    },
  ],

  faq: [
    { question: '¿Trabajan con empresas de todos los tamaños?',   answer: 'Sí, atendemos desde emprendedores individuales hasta empresas con más de 100 empleados. El servicio se adapta al tamaño y necesidades de cada cliente.' },
    { question: '¿Todo el trabajo es remoto?',                    answer: 'La mayor parte sí. Nos adaptamos a tu flujo de trabajo: visitas presenciales, reuniones por videollamada o gestión completamente digital.' },
    { question: '¿Qué pasa si tengo una inspección del SENIAT?',  answer: 'Te acompañamos en todo el proceso: preparación de documentación, representación ante el organismo y gestión de cualquier recurso necesario.' },
    { question: '¿Cuánto tiempo tarda el onboarding?',            answer: 'En 5 días hábiles tenemos todo el contexto de tu empresa y comenzamos a operar. El diagnóstico inicial es sin costo.' },
  ],

  contact: {
    email:        'info@mendozaasociados.com.ve',
    whatsapp:     '+58 212 5551234',
    address:      'Torre Empresarial, Piso 8, Chacao, Caracas',
    formEndpoint: '/',
  },

  footer: {
    links: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Precios',   href: '#precios' },
      { label: 'Contacto',  href: '#contacto' },
    ],
    social: [
      { platform: 'LinkedIn',  href: 'https://linkedin.com/' },
      { platform: 'Instagram', href: 'https://instagram.com/' },
    ],
    legalText: '© 2024 Mendoza & Asociados · RIF J-123456789 · Caracas, Venezuela',
  },

  whatsappFloat: {
    phone:   '+58 212 5551234',
    message: 'Hola, me interesa agendar una consulta gratuita sobre asesoría contable.',
  },
};
