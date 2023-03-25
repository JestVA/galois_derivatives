/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    fontFamily: {
      'heading': 'Solway',
      'sub-heading': 'Solway',
      'main-content': 'Solway',
      'nav': 'Solway'
    },
    colors: {
      'primary': '#fbfb1e',
      'green': '#1e3cfb'
    }
  }
};