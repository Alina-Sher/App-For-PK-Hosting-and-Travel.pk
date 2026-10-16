/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0f2a43', brand: { DEFAULT: '#0e7c86', dark: '#0a5c64', light: '#e6f4f5' }, sand: '#faf7f2' },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['Fraunces', 'Georgia', 'serif'] },
    },
  },
  plugins: [],
};
