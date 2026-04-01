/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1816',
        accent:  '#f59e0b',
        success: '#10b981',
        danger:  '#ef4444',
        muted:   '#7a7062',
        surface: {
          base:    '#ffffff',
          raised:  '#f7f6f4',
          border:  '#e5e2dc',
          overlay: '#f0ede8',
        },
      },
      fontFamily: {
        sans:    ['"Roboto"', 'ui-sans-serif', 'sans-serif'],
        display: ['"Roboto"', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
