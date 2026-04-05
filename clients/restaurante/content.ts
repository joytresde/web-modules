import type { SiteContent } from '@/types/content';

export const content: SiteContent = {
  nav: [
    { label: 'Menú',      href: '#menu' },
    { label: 'Nosotros',  href: '#nosotros' },
    { label: 'Galería',   href: '#galeria' },
    { label: 'Reservas',  href: '#contacto' },
  ],

  hero: {
    title:    'Sabor venezolano en cada plato',
    subtitle: 'Más de 20 años llevando la cocina de abuela a tu mesa. Abierto todos los días en el corazón de Caracas.',
    cta:      { label: 'Reservar mesa', href: '#contacto' },
    bgImage:  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80',
  },

  about: {
    title: 'Una historia de sabor y familia',
    text:  'Desde 2004, El Fogón de Caracas es el punto de encuentro de familias venezolanas que buscan sabores auténticos. Nuestra cocina usa ingredientes frescos del mercado local y recetas transmitidas de generación en generación.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80',
  },

  services: [
    { title: 'Pabellón Criollo',  description: 'Caraotas negras, carne mechada, tajadas y arroz blanco. El clásico de los clásicos.',      icon: '🍽️' },
    { title: 'Asado Negro',       description: 'Carne de res en salsa oscura con papas y vegetales. Receta de la abuela Conchita.',         icon: '🥩' },
    { title: 'Cachapas',          description: 'Tortillas de maíz tierno con queso de mano y mantequilla. Servidas al instante.',           icon: '🌽' },
    { title: 'Hallacas',          description: 'Disponibles todo el año bajo pedido. La tradición navideña en cualquier época.',             icon: '🫔' },
    { title: 'Sopas del día',     description: 'Sancocho de gallina, hervido de res o sopa de pollo. Cambian cada día.',                    icon: '🍲' },
    { title: 'Postres caseros',   description: 'Bienmesabe, quesillo, torta de guanábana y más. Hechos en casa todos los días.',            icon: '🍮' },
  ],

  stats: [
    { value: '20 años', label: 'De tradición' },
    { value: '60+',     label: 'Platos en el menú' },
    { value: '300+',    label: 'Comensales al día' },
    { value: '4.8 ★',  label: 'En Google Maps' },
  ],

  gallery: [
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Plato principal' },
    { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80', alt: 'Desayuno venezolano' },
    { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', alt: 'Platos del día' },
    { src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80', alt: 'Postres caseros' },
    { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80', alt: 'Cocina abierta' },
    { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', alt: 'Ambiente del restaurante' },
  ],

  testimonials: [
    {
      name:   'Familia Hernández',
      role:   'Clientes desde 2009',
      text:   'Cada cumpleaños lo celebramos en El Fogón. El sancocho de gallina es el mejor de Caracas, sin discusión.',
      avatar: 'https://i.pravatar.cc/80?img=5',
    },
    {
      name:   'Chef Roberto Díaz',
      role:   'Gastrónomo',
      text:   'Pocos restaurantes mantienen la autenticidad de la cocina venezolana como lo hace El Fogón. Un tesoro cultural.',
      avatar: 'https://i.pravatar.cc/80?img=68',
    },
    {
      name:   'Valentina Moreno',
      role:   'Food blogger',
      text:   'Las cachapas con queso de mano son las mejores que he probado en mi vida. Voy cada semana sin falta.',
      avatar: 'https://i.pravatar.cc/80?img=36',
    },
  ],

  ctaBanner: {
    title:       '¿Celebras algo especial?',
    subtitle:    'Organizamos eventos privados para hasta 80 personas. Menú personalizado y decoración incluida.',
    primaryCta:  { label: 'Consultar disponibilidad', href: '#contacto' },
    secondaryCta: { label: 'Ver galería',             href: '#galeria' },
  },

  contact: {
    email:        'reservas@elfogondecaracas.com',
    whatsapp:     '+58 212 9876543',
    address:      'Av. Francisco de Miranda, Chacao, Caracas',
    formEndpoint: '/',
  },

  footer: {
    links: [
      { label: 'Menú',     href: '#menu' },
      { label: 'Galería',  href: '#galeria' },
      { label: 'Reservas', href: '#contacto' },
    ],
    social: [
      { platform: 'Instagram', href: 'https://instagram.com/' },
      { platform: 'Facebook',  href: 'https://facebook.com/' },
    ],
    legalText: '© 2024 El Fogón de Caracas · Lun–Dom 11:30 AM – 9:00 PM',
  },

  whatsappFloat: {
    phone:   '+58 212 9876543',
    message: 'Hola, quisiera reservar una mesa para el restaurante.',
  },
};
