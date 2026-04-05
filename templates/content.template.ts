import type { SiteContent } from '@/types/content';

export const content: SiteContent = {
  nav: [
    { label: 'Inicio',    href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros',  href: '#nosotros' },
    { label: 'Contacto',  href: '#contacto' },
  ],

  hero: {
    title:    'Tu Título Principal Aquí',
    subtitle: 'Descripción breve de la propuesta de valor del negocio.',
    cta:      { label: 'Contáctanos', href: '#contacto' },
    badge:    'Opcional: etiqueta destacada',
  },

  about: {
    text:  'Párrafo descriptivo sobre el negocio, su historia o misión.',
    image: '/clients/nombre-cliente/assets/equipo.jpg',
  },

  services: [
    { title: 'Servicio A', description: 'Descripción del servicio A.', icon: '⚡' },
    { title: 'Servicio B', description: 'Descripción del servicio B.', icon: '🎯' },
    { title: 'Servicio C', description: 'Descripción del servicio C.', icon: '🌟' },
  ],

  testimonials: [
    {
      name: 'Cliente Ejemplo',
      role: 'CEO, Empresa S.A.',
      text: 'Excelente servicio, muy recomendado.',
    },
  ],

  stats: [
    { value: '100+', label: 'Clientes' },
    { value: '5 años', label: 'Experiencia' },
    { value: '24/7', label: 'Soporte' },
    { value: '99%', label: 'Satisfacción' },
  ],

  faq: [
    {
      question: '¿Cuál es el tiempo de entrega?',
      answer:   'Generalmente entre 3 y 7 días hábiles dependiendo del proyecto.',
    },
  ],

  contact: {
    email:        'contacto@empresa.com',
    whatsapp:     '+58 412 0000000',
    address:      'Ciudad, Estado, Venezuela',
    formEndpoint: '/',
  },

  footer: {
    links: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Contacto',  href: '#contacto' },
    ],
    social: [
      { platform: 'Instagram', href: 'https://instagram.com/' },
      { platform: 'WhatsApp',  href: 'https://wa.me/584120000000' },
    ],
  },
};
