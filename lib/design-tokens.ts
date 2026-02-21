/**
 * Design Tokens from Figma
 * File: nook@shadcn_ui components with variables & Tailwind classes
 * Node: 5014:3 (Desktop - 1)
 * Mode: Primary (5248:0) - Brown/Warm Earth Tones
 */

export const colors = {
  // Background colors
  background: {
    primary: '#FCF9F6',    // Very light warm beige
    secondary: '#F0E4D9',  // Light warm beige/cream
    tertiary: '#E4CDB7',   // Light brown
  },

  // Foreground/Text colors
  foreground: {
    primary: '#3E332E',    // Dark brown - main text
    secondary: '#815E46',  // Medium brown - secondary text
    tertiary: '#543E2E',   // Dark accent brown
  },

  // Brown scale (from Radix UI)
  brown: {
    3: '#F6EEE7',   // Lightest brown
    6: '#E4CDB7',   // Light brown
    10: '#A07553',  // Medium brown
    12: '#3E332E',  // Darkest brown
  },

  // Orange scale for accents/charts
  orange: {
    8: '#EC9455',   // Light orange
    9: '#F76B15',   // Medium orange
    10: '#EF5F00',  // Orange
    11: '#CC4E00',  // Dark orange
    12: '#582D1D',  // Very dark orange/brown
  },

  // UI Elements
  border: {
    primary: '#E4CDB7',   // Light brown
    secondary: '#815E46', // Medium brown
  },

  // Interactive elements
  primary: '#3E332E',           // Dark brown
  primaryForeground: '#FAFAFA', // Off-white

  // Semantic colors
  destructive: '#DC2626',
  muted: '#F5F5F5',
}

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['monospace'],
  },

  // Font sizes matching Figma design
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },

  // Font weights
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeight: {
    tight: '20px',
    base: '24px',
    relaxed: '28px',
    loose: '32px',
    extraLoose: '40px',
    heading: '60px',
  },
}

export const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
}

export const borderRadius = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',  // For pill-shaped buttons
}

export const layout = {
  // Max widths from Figma
  container: {
    desktop: '1440px',
    content: '1360px',  // With 40px padding
    text: '534px',      // Hero text max width
  },

  // Grid configuration
  grid: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 4,
    },
    gap: '32px',
  },

  // Padding
  padding: {
    page: '40px',
    section: '64px',
    card: '24px',
  },
}

export const effects = {
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },

  transitions: {
    fast: '150ms ease',
    base: '200ms ease',
    slow: '300ms ease',
  },
}

// Figma variable references
export const figmaVariables = {
  file: 'nook@shadcn_ui components with variables & Tailwind classes',
  fileKey: 'sdA9LFFgl6VNgmrHKdIMf9',
  nodeId: '5014:3',
  modeName: 'Primary',
  modeId: '5248:0',
  theme: 'Brown/Warm Earth Tones',
}
