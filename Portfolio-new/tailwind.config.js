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
    }
    },
  },
  plugins: [],
}

