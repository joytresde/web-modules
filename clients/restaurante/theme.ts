import type { Theme } from '@/types/theme';

export const theme = {
  colorScheme: 'forced-dark',
  colors: {
    primary:        '#7C2D12',
    secondary:      '#B91C1C',
    accent:         '#D97706',
    dark:           '#1C1917',
    light:          '#FEF3C7',
    background:     '#FFFBF5',
    surfaceInverse: '#1C1917',
  },
  darkColors: {
    dark:           '#FEF3C7',    // texto → crema cálido
    background:     '#1C0A00',    // fondo → marrón oscuro cálido
    light:          '#2D1810',    // tarjetas → marrón oscuro
    surfaceInverse: '#0F0500',    // footer/CTA → marrón casi negro
  },
  fonts: {
    heading: 'Playfair Display',
    body:    'Lato',
  },
  businessName: 'El Fogón de Caracas',
  tagline:      'Cocina venezolana de tradición',
  locale:       'es-VE',
} satisfies Theme;
