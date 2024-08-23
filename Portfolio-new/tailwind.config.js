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

      },
    },
  },
  plugins: [],
}

