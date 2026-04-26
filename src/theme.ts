export const theme = {
  // Primary — Bronze Ouro
  primary: '#b78b4c',
  primaryDark: '#9a7239',
  primaryDarker: '#6f5128',
  primaryLight: '#f5e6d3',
  primaryCream: '#faf3e8',
  primaryGlow: 'rgba(183, 139, 76, 0.12)',

  // Superfícies & fundo
  background: '#f8f8f8',
  surfaceSoft: '#fcfaf7',
  surfaceCream: '#f9f3ea',
  white: '#ffffff',

  // Bordas
  stroke: 'rgba(183, 139, 76, 0.15)',
  strokeStrong: 'rgba(183, 139, 76, 0.3)',
  strokeSoft: 'rgba(26, 26, 26, 0.06)',

  // Texto
  textPrimary: '#1a1a1a',
  textSecondary: '#3a3a3a',
  textMuted: '#6b6b6b',
  textFaint: '#9a958c',

  // Sage médico & azul clínico
  medicalSage: '#7d9489',
  medicalSageDark: '#5d7468',
  medicalSageSoft: '#e8f0ec',
  accentBlue: '#4a7c8a',
  accentBlueSoft: '#e0ecef',

  // Sinalização
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',

  // Sombras
  shadowXs: '0 1px 2px rgba(19,19,19,0.04)',
  shadowSm: '0 1px 3px rgba(19,19,19,0.05), 0 1px 2px rgba(19,19,19,0.03)',
  shadowMd: '0 8px 24px -8px rgba(19,19,19,0.10), 0 4px 8px -4px rgba(19,19,19,0.04)',
  shadowLg: '0 20px 50px -12px rgba(19,19,19,0.14), 0 8px 16px -8px rgba(19,19,19,0.06)',
  shadowXl: '0 32px 80px -16px rgba(19,19,19,0.18)',
  shadowWarm: '0 8px 30px -8px rgba(183,139,76,0.30)',

  // Raios
  radiusSm: '12px',
  radiusMd: '16px',
  radiusLg: '24px',
  radiusXl: '32px',
} as const;

export type Theme = typeof theme;
