export const brandTheme = {
  extend: {
    colors: {
      midnight: '#040815',
      cyan: {
        DEFAULT: '#22d3ee',
        soft: '#67e8f9',
      },
      greencyan: '#14f5c6',
      orange: '#f97316',
      white: '#ffffff',
      text: '#cbd5e1',
      'text-muted': '#94a3b8',
      background: '#040815',
      foreground: '#cbd5e1',
      primary: '#22d3ee',
      secondary: '#14f5c6',
      accent: '#f97316',
      success: '#14f5c6',
      warning: '#fbbf24',
      danger: '#ef4444',
      glass: {
        bg: 'rgba(34, 211, 238, 0.04)',
        border: 'rgba(34, 211, 238, 0.12)',
        'raised-bg': 'rgba(34, 211, 238, 0.08)',
        'raised-border': 'rgba(34, 211, 238, 0.25)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    borderRadius: {
      pill: '9999px',
      card: '16px',
      panel: '20px',
    },
    boxShadow: {
      glow: '0 0 20px rgba(34, 211, 238, 0.3)',
      'glow-strong': '0 0 40px rgba(34, 211, 238, 0.4)',
    },
    backdropBlur: {
      xs: '2px',
    },
  },
};
