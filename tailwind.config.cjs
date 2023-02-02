/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    fontFamily: {
      'heading': 'Fjalla One, sans-serif',
      // 'heading': 'Astrella',
      'primary': 'Solway, serif'
      // 'primary': 'MangaBey'
    }
  }
};