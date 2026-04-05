import type { Theme } from '@/types/theme';

export const theme = {
  colorScheme: 'light',
  colors: {
    primary:        '#1D4ED8',
    secondary:      '#3B82F6',
    accent:         '#F97316',
    dark:           '#1F2937',
    light:          '#F1F5F9',
    background:     '#FFFFFF',
    surfaceInverse: '#111827',
  },
  fonts: {
    heading: 'Montserrat',
    body:    'Inter',
  },
  businessName: 'TécnicosPro',
  tagline:      'Servicio técnico del hogar en Caracas',
  locale:       'es-VE',
} satisfies Theme;
