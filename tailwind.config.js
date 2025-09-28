/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1100px',
      },
    },
    extend: {
      colors: {
        deep: '#0B3D2E',
        forest: '#1F6F57',
        aqua: '#23B5D3',
        gold: '#C6A15B',
        ivory: '#F7F5F0',
        ink: '#1C1C1C',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        luxe: '1.25rem',
        panel: '1.375rem',
      },
      boxShadow: {
        luxe: '0 24px 50px -24px rgba(11, 61, 46, 0.45)',
        soft: '0 18px 38px -18px rgba(12, 42, 33, 0.35)',
      },
      backgroundImage: {
        'gold-divider':
          'linear-gradient(90deg, rgba(198,161,91,0) 0%, rgba(198,161,91,0.55) 45%, rgba(198,161,91,0.85) 50%, rgba(198,161,91,0) 100%)',
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(35,181,211,0.25), transparent 45%), linear-gradient(140deg, #0B3D2E 15%, #1F6F57 55%, #0B3D2E 100%)',
        'dark-gradient':
          'linear-gradient(160deg, rgba(11,61,46,0.92), rgba(19,67,52,0.94))',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
      },
    },
  },
  plugins: [],
}

