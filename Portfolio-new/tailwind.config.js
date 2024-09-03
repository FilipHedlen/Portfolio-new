/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        'light-blue': '#e0f7fa', 
        'light-green': '#aaf683',
        'peach': '#FFD97D',
        'header/footer': '#759AAB',
        'header/footer-dark': '#2d3748',
        'primary-light': '#e0f7fa',
        'primary-light-bg': '#f4eb97',
        'primary-dark-hover': '#a0aec0',
        'primary-light-hover': '#718096',
        'dark-grey': '#1a202c',
        'light-grey': '#f7fafc',
        'semi-light-grey': '#edf2f7',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out forwards',
        slideOut: 'slideOut 0.5s ease-in-out forwards',
      },
      backgroundImage: {
        'light-bg': 'radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)',
        'dark-bg': 'radial-gradient(circle farthest-side, rgba(255,0,182,0.15), rgba(255,255,255,0))',
      },
    },
  },
  plugins: [require('daisyui')],
}