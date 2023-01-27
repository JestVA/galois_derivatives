module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    fontFamily: {
      'heading': 'Fjalla One, sans-serif',
      'primary': 'Solway, serif'
    }
  }
};
