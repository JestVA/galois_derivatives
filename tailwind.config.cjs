/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    fontFamily: {
      'heading': 'Astrella',
      'sub-heading': 'MangaBey',
      'main-content': 'Asul',
      'nav': 'Marcellus'
    },
    colors: {
      'primary': '#76806F',
      'green': '#E5FFFF'
    }
  }
};