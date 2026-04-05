export interface ThemeColors {
  primary:        string;
  secondary:      string;
  accent:         string;
  dark:           string;    // text color (flips to light in dark mode)
  light:          string;    // card/section backgrounds
  background:     string;    // page background
  surfaceInverse: string;    // always-dark sections (CTABanner, Footer)
}

export interface ThemeDarkColors {
  dark:           string;    // text becomes light
  background:     string;    // page bg becomes dark
  light:          string;    // card bg becomes dark surface
  surfaceInverse: string;    // stays dark, just deeper
}

export interface Theme {
  colors:       ThemeColors;
  darkColors?:  ThemeDarkColors;
  colorScheme?: 'light' | 'forced-dark' | 'auto';
  fonts: {
    heading: string;
    body:    string;
  };
  businessName: string;
  tagline:      string;
  locale:       string;
}
