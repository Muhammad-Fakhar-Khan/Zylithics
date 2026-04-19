/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'obsidian': '#0A0A0A',
        'obsidian-light': '#F9FAFB',
        'cobalt': '#2E5BFF',
        'electric-cobalt': '#2E5BFF',
        'deep-navy': '#1E3A8A',
        'cobalt-light': '#1E3A8A',
        'cyan-accent': '#21E6C1'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
