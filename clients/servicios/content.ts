import type { SiteContent } from '@/types/content';

export const content: SiteContent = {
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso',   href: '#proceso' },
    { label: 'Nosotros',  href: '#nosotros' },
    { label: 'Contacto',  href: '#contacto' },
  ],

  hero: {
    title:    'El técnico que llega cuando lo necesitas',
    subtitle: 'Plomería, electricidad y aires acondicionados en Caracas. Presupuesto gratis en 24 horas.',
    cta:      { label: 'Solicitar servicio', href: '#contacto' },
    bgImage:  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80',
  },

  services: [
    { title: 'Plomería',           description: 'Tuberías, grifos, desagües y cisternas. Reparamos fugas en el día.',                     icon: '🔧' },
    { title: 'Electricidad',       description: 'Instalaciones, breakers, tomacorrientes y plantas eléctricas.',                          icon: '⚡' },
    { title: 'Aire Acondicionado', description: 'Instalación, mantenimiento y reparación de split, cassette y piso-techo.',               icon: '❄️' },
    { title: 'Carpintería',        description: 'Puertas, muebles, closets y reparaciones de madera en general.',                        icon: '🪚' },
    { title: 'Pintura',            description: 'Pintura interior y exterior, acabados y reparación de paredes.',                        icon: '🖌️' },
    { title: 'Gasfitería',         description: 'Calentadores, termos y sistemas de gas doméstico e industrial.',                        icon: '🔥' },
  ],

  processSteps: {
    steps: [
      { number: 1, title: 'Nos contactas',    description: 'Por WhatsApp o teléfono, cuéntanos el problema.',          icon: '📞' },
      { number: 2, title: 'Presupuesto',      description: 'Te enviamos un presupuesto sin costo en menos de 24 h.',   icon: '📋' },
      { number: 3, title: 'Realizamos el trabajo', description: 'Nuestro técnico va a tu hogar y soluciona el problema.', icon: '🔨' },
      { number: 4, title: 'Garantía',         description: 'Todos los trabajos tienen garantía de 90 días.',           icon: '✅' },
    ],
  },

  stats: [
    { value: '1,200+', label: 'Trabajos realizados' },
    { value: '15 años', label: 'En el mercado' },
    { value: '24h',     label: 'Tiempo de respuesta' },
    { value: '4.9 ★',  label: 'Calificación promedio' },
  ],

  about: {
    title: '15 años resolviendo problemas en el hogar',
    text:  'Somos un equipo de técnicos certificados con más de 15 años operando en Caracas y el Gran Caracas. Trabajamos con repuestos originales, materiales de primera calidad y respaldamos cada trabajo con garantía escrita.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
  },

  testimonials: [
    {
      name:   'Ana Belén Torres',
      role:   'Residencias Valle Arriba',
      text:   'Llamé a las 8 AM por una tubería rota y el técnico llegó a las 11 AM. Excelente servicio, rápido y limpio.',
      avatar: 'https://i.pravatar.cc/80?img=23',
    },
    {
      name:   'Pedro Salcedo',
      role:   'Edificio Las Mercedes',
      text:   'Ya van 3 veces que los llamo para distintas cosas. Siempre puntuales y el precio es justo.',
      avatar: 'https://i.pravatar.cc/80?img=15',
    },
    {
      name:   'Mariela Vásquez',
      role:   'Casa en La Trinidad',
      text:   'El aire quedó como nuevo. Me explicaron todo lo que hicieron y me dejaron el recibo detallado.',
      avatar: 'https://i.pravatar.cc/80?img=44',
    },
  ],

  faq: [
    { question: '¿Tienen disponibilidad los fines de semana?',  answer: 'Sí, atendemos sábados de 8 AM a 4 PM. Para emergencias los domingos, consultar disponibilidad por WhatsApp.' },
    { question: '¿El presupuesto tiene algún costo?',           answer: 'No, todos los presupuestos son completamente gratuitos y sin compromiso.' },
    { question: '¿Cuál es el área de cobertura?',               answer: 'Cubrimos Caracas y sus zonas aledañas: Baruta, Chacao, El Hatillo y Sucre.' },
    { question: '¿Cuánto dura la garantía de los trabajos?',    answer: 'Todos los servicios tienen 90 días de garantía sobre mano de obra. Los repuestos tienen la garantía del fabricante.' },
  ],

  contact: {
    email:        'servicio@tecnicospro.com.ve',
    whatsapp:     '+58 414 1234567',
    address:      'Caracas, Venezuela',
    formEndpoint: '/',
  },

  footer: {
    links: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Proceso',   href: '#proceso' },
      { label: 'Contacto',  href: '#contacto' },
    ],
    social: [
      { platform: 'Instagram', href: 'https://instagram.com/' },
      { platform: 'WhatsApp',  href: 'https://wa.me/584141234567' },
    ],
  },

  whatsappFloat: {
    phone:   '+58 414 1234567',
    message: 'Hola, necesito un presupuesto para un servicio técnico en mi hogar.',
  },
};
