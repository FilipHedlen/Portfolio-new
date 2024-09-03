/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'light-blue': '#e0f7fa',
        'light-green': '#aaf683',
        'peach': '#FFD97D',
        'header/footer': '#759AAB',
        'header/footer-dark': '#2d3748',
        'primary-dark-hover': '#a0aec0',
        'primary-light-hover': '#718096',
        'dark-grey': '#1a202c',
        'light-grey': '#f7fafc',
        'semi-light-grey': '#edf2f7',
        'cyan': '#00bcd4',
        'green': '#4caf50',
        'pink': '#e91e63',
        'cyan-dark': '#0097a7',
        'green-dark': '#388e3c',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#e91e63' },
          '50%': { color: '#00bcd4' },
          '100%': { color: '#e91e63' },
        },
        bounceLight: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        colorChange: 'colorChange 4s ease-in-out infinite',
        bounceLight: 'bounceLight 0.6s ease-in-out',
      },
      backgroundImage: {
        'light-bg': 'radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #e0f7fa 100%)',
        'dark-bg': 'radial-gradient(circle farthest-side, rgba(255,0,182,0.15), rgba(255,255,255,0))',
      },
    },
  },
  plugins: [require('daisyui')],
}