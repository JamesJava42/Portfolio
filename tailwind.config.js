module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'aws': '#EC7211',
        'gcp': '#4285F4',
        'kubernetes': '#326CE5',
        'docker': '#2496ED',
        'angular': '#DD0031'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}