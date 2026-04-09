/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        navy: '#102542',
        accent: '#1d4ed8',
        soft: '#e2e8f0'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)'
      },
      maxWidth: {
        content: '1200px'
      }
    }
  },
  plugins: []
}
