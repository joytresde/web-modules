import type { Theme } from '@/types/theme';

export const theme = {
  colorScheme: 'light', // 'light' | 'forced-dark' | 'auto'
  colors: {
    primary:        '#1B4F72',
    secondary:      '#2E86C1',
    accent:         '#F39C12',
    dark:           '#1A1A1A',
    light:          '#F0F4F8',
    background:     '#FFFFFF',
    surfaceInverse: '#1A1A1A',
  },
  // Opcional: activa dark mode automático/forzado
  // darkColors: {
  //   dark:           '#F8FAFC',
  //   background:     '#0F172A',
  //   light:          '#1E293B',
  //   surfaceInverse: '#020617',
  // },
  fonts: {
    heading: 'Montserrat',
    body:    'Inter',
  },
  businessName: 'Nombre del Negocio',
  tagline:      'Eslogan corto y memorable',
  locale:       'es-VE',
} satisfies Theme;
