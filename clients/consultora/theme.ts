import type { Theme } from '@/types/theme';

export const theme = {
  colorScheme: 'auto',
  colors: {
    primary:        '#1E3A5F',
    secondary:      '#1D4ED8',
    accent:         '#92700A',
    dark:           '#0F172A',
    light:          '#F8FAFC',
    background:     '#FFFFFF',
    surfaceInverse: '#0F172A',
  },
  darkColors: {
    dark:           '#E2E8F0',    // texto → slate-200
    background:     '#0F172A',    // fondo → slate-900
    light:          '#1E293B',    // tarjetas → slate-800
    surfaceInverse: '#020617',    // footer/CTA → slate-950
  },
  fonts: {
    heading: 'Cormorant Garamond',
    body:    'Source Sans 3',
  },
  businessName: 'Mendoza & Asociados',
  tagline:      'Asesoría empresarial de confianza',
  locale:       'es-VE',
} satisfies Theme;
