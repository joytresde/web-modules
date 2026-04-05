import type { Theme } from '@/types/theme';

export const theme = {
  colors: {
    primary:        '#1B4F72',
    secondary:      '#2E86C1',
    accent:         '#F39C12',
    dark:           '#1A1A1A',
    light:          '#F0F4F8',
    background:     '#FFFFFF',
    surfaceInverse: '#1A1A1A',
  },
  fonts: {
    heading: 'Montserrat',
    body:    'Inter',
  },
  businessName: 'Demo Client',
  tagline:      'Sistema modular de landing pages',
  locale:       'es-VE',
} satisfies Theme;
