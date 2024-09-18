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
        flipIn: {
          '0%': { transform: 'rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'rotateX(0deg)', opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        colorChange: {
          '0%': { color: '#0097a7' },
          '50%': { color: '#4caf50' },
          '100%': { color: '#0097a7' },
        },
        bounceLight: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(-50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        textSlide: {
          '0%, 16%': { transform: 'translateY(0%)' },
          '20%, 36%': { transform: 'translateY(-16.66%)' },
          '40%, 56%': { transform: 'translateY(-33.33%)' },
          '60%, 76%': { transform: 'translateY(-50%)' },
          '80%, 96%': { transform: 'translateY(-66.66%)' },
          '100%': { transform: 'translateY(-83.33%)' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        zoomOutBlur: {
          '0%': { transform: 'scale(1.2)',filter: 'blur(10px)', opacity: '0' },
          '100%': { transform: 'scale(1)', filter: 'blur(0)', opacity: '1' },
        },
      },
      animation: {
        colorChange: 'colorChange 4s ease-in-out infinite',
        bounceLight: 'bounceLight 0.6s ease-in-out',
        fadeIn: 'fadeIn 2.5s ease-out',
        slideIn: 'slideIn 1s ease-out',
        textSlide: 'textSlide 12s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        spin: 'spin 0.5s linear',
        flipIn: 'flipIn 2.0s ease-out',
        wavingHand: 'wave 2s linear infinite',
        zoomOutBlur: 'zoomOutBlur 1.5s ease-out',
      },
      backgroundImage: {
        'light-bg': 'radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #63e 100%)',
        'dark-bg': 'radial-gradient(circle farthest-side, rgba(255,0,182,0.15), rgba(255,255,255,0))',
        'frontend-bg': "url(/frontendbg.jpg)",
      },
    },
  },
  plugins: [require('daisyui')],
}