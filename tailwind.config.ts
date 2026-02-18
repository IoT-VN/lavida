import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9d9ff',
          300: '#7cb8ff',
          400: '#388bff',
          500: '#1a56db',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e3070',
          900: '#1e2a5e',
        },
        accent: {
          400: '#c9a96e',
          500: '#b8941f',
          600: '#9a7614',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-be-vietnam-pro)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['2.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-md': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section-title': ['1.75rem', { lineHeight: '1.2', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};

export default config;
