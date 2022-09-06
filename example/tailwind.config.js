const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        accent: {
          DEFAULT: '#6164ff',
          light: '#8A8CFF',
          dark: '#383CFF',
        },
      },
      keyframes: {
        'fade-zoom-up': {
          '0%': { opacity: 0, transform: 'translateY(10rem) scale(0.5)' },
          '100%': { opacity: 1, transform: 'translateY(0rem) scale(1)' },
        },
      },
      animation: {
        'fade-zoom-up':
          'fade-zoom-up 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both',
      },
      boxShadow: {
        'top-sm':
          'rgba(0, 0, 0, 0.1) 0px -4px 6px -1px, rgba(0, 0, 0, 0.06) 0px -2px 4px -1px',
      },
    },
  },
  plugins: [],
};
