/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8f8191',
          DEFAULT: '#c92085',
          dark: '#c68109',
        }
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus', 'dark'],
      scale: ['hover', 'focus', 'dark'],
      translate: ['hover', 'focus', 'dark'],
      textColor: ['hover', 'focus', 'dark'],
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      opacity: ['dark'],
    },
  },
  plugins: [],
};