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
        'primary-grey-hover': '#718096',
        'primary-light-grey-hover': '#a0aec0',

      },
    },
  },
  plugins: [],
}

