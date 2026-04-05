import type { SiteContent } from '@/types/content';

export const content: SiteContent = {
  nav: [
    { label: 'Inicio',    href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros',  href: '#nosotros' },
    { label: 'Precios',   href: '#precios' },
    { label: 'Contacto',  href: '#contacto' },
  ],

  hero: {
    title:    'Sistema Modular de Landing Pages',
    subtitle: 'Construye sitios web rápidos y económicos con componentes intercambiables.',
    cta:      { label: 'Ver servicios', href: '#servicios' },
    badge:    'Desarrollado por palacios3d.com',
  },

  logoBar: {
    title: 'Confían en nosotros',
    logos: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',   alt: 'Google' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',             alt: 'Amazon' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png', alt: 'Netflix' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Unilevery_logo.svg/1200px-Unilevery_logo.svg.png',      alt: 'Unilever' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png',           alt: 'Samsung' },
    ],
  },

  services: [
    {
      title:       'Landing Pages',
      description: 'Páginas de aterrizaje optimizadas para conversión.',
      icon:        '🚀',
    },
    {
      title:       'Branding Visual',
      description: 'Identidad visual coherente con tu marca.',
      icon:        '🎨',
    },
    {
      title:       'Deploy Rápido',
      description: 'En línea en menos de 48 horas.',
      icon:        '⚡',
    },
  ],

  about: {
    text:  'Este sistema permite construir sitios web para clientes venezolanos de forma rápida, económica y con alta calidad visual. Los componentes son "puzzle" — se intercambian sin modificar el código base.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },

  processSteps: {
    title:    '¿Cómo trabajamos?',
    subtitle: 'Un proceso claro en 4 pasos, sin complicaciones.',
    steps: [
      {
        number:      1,
        title:       'Reunión inicial',
        description: 'Conversamos por WhatsApp o videollamada para entender tu negocio.',
        icon:        '💬',
      },
      {
        number:      2,
        title:       'Propuesta y diseño',
        description: 'Te enviamos una propuesta visual en 24 horas para tu aprobación.',
        icon:        '✏️',
      },
      {
        number:      3,
        title:       'Desarrollo',
        description: 'Construimos tu sitio con el contenido aprobado en tiempo récord.',
        icon:        '⚙️',
      },
      {
        number:      4,
        title:       'Entrega y deploy',
        description: 'Publicamos tu sitio y te enseñamos a usarlo. ¡Listo en 48h!',
        icon:        '🚀',
      },
    ],
  },

  stats: [
    { value: '50+',    label: 'Clientes' },
    { value: '3 años', label: 'Experiencia' },
    { value: '48h',    label: 'Entrega' },
    { value: '100%',   label: 'Satisfacción' },
  ],

  ctaBanner: {
    title:        '¿Listo para tener tu sitio web hoy?',
    subtitle:     'En 48 horas te entregamos una landing page profesional lista para publicar.',
    primaryCta:   { label: 'Solicitar cotización', href: '#contacto' },
    secondaryCta: { label: 'Ver galería',          href: '#galeria' },
  },

  testimonials: [
    {
      name:   'María González',
      role:   'Dueña, Farmacia Central',
      text:   'Mi página quedó lista en dos días. Mis clientes la encuentran facilísimo en Google.',
      avatar: 'https://i.pravatar.cc/80?img=47',
    },
    {
      name:   'Carlos Rodríguez',
      role:   'Gerente, Agroservicios del Sur',
      text:   'Excelente diseño y precio justo. El formulario de contacto funciona perfecto.',
      avatar: 'https://i.pravatar.cc/80?img=12',
    },
    {
      name:   'Luisa Martínez',
      role:   'Directora, Clínica Salud Plena',
      text:   'Mis pacientes me dicen que la página les transmite mucha confianza. 100% recomendado.',
      avatar: 'https://i.pravatar.cc/80?img=32',
    },
  ],

  gallery: [
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', alt: 'Oficina moderna' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80', alt: 'Reunión de equipo' },
    { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80', alt: 'Espacio de trabajo' },
    { src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80', alt: 'Diseño creativo' },
    { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80', alt: 'Desarrollo web' },
    { src: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&q=80', alt: 'Setup tecnología' },
  ],

  pricing: {
    title:    'Planes y Precios',
    subtitle: 'Elige el paquete que mejor se adapte a tu negocio.',
    plans: [
      {
        name:     'Básico',
        price:    '$149',
        currency: 'USD',
        period:   'única vez',
        cta:      { label: 'Comenzar ahora', href: '#contacto' },
        features: [
          { text: '1 página landing' },
          { text: 'Formulario de contacto' },
          { text: 'Responsive mobile' },
          { text: 'Deploy en Netlify' },
          { text: 'Soporte 30 días' },
          { text: 'Dominio personalizado', included: false },
          { text: 'SEO avanzado',          included: false },
        ],
      },
      {
        name:     'Profesional',
        price:    '$299',
        currency: 'USD',
        period:   'única vez',
        featured: true,
        cta:      { label: 'Elegir Profesional', href: '#contacto' },
        features: [
          { text: 'Landing + sección blog' },
          { text: 'Formulario de contacto' },
          { text: 'Responsive mobile' },
          { text: 'Deploy en Vercel' },
          { text: 'Soporte 60 días' },
          { text: 'Dominio personalizado' },
          { text: 'SEO avanzado' },
        ],
      },
      {
        name:     'Empresarial',
        price:    '$499',
        currency: 'USD',
        period:   'única vez',
        cta:      { label: 'Contactar ventas', href: '#contacto' },
        features: [
          { text: 'Hasta 5 páginas' },
          { text: 'Formularios múltiples' },
          { text: 'Responsive mobile' },
          { text: 'Deploy + CDN global' },
          { text: 'Soporte 90 días' },
          { text: 'Dominio personalizado' },
          { text: 'SEO avanzado + Analytics' },
        ],
      },
    ],
  },

  faq: [
    {
      question: '¿Cuánto tiempo tarda el sitio?',
      answer:   'Entre 2 y 5 días hábiles dependiendo del contenido que nos entregue.',
    },
    {
      question: '¿El sitio funciona en celular?',
      answer:   'Sí, todos los sitios son 100% responsive y optimizados para móvil.',
    },
    {
      question: '¿Incluye hosting?',
      answer:   'Sí, desplegamos en Netlify o Vercel con plan gratuito incluido.',
    },
    {
      question: '¿Puedo cambiar el contenido después?',
      answer:   'Sí, coordinamos una sesión de revisión para aplicar los cambios necesarios.',
    },
  ],

  contact: {
    email:        'hola@palacios3d.com',
    whatsapp:     '+58 412 0000000',
    formEndpoint: '/',
  },

  footer: {
    links: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Nosotros',  href: '#nosotros' },
      { label: 'Precios',   href: '#precios' },
      { label: 'Contacto',  href: '#contacto' },
    ],
    social: [
      { platform: 'Instagram', href: 'https://instagram.com/palacios3d' },
    ],
  },

  whatsappFloat: {
    phone:   '+58 412 0000000',
    message: 'Hola, me interesa saber más sobre sus servicios de diseño web.',
  },
};
