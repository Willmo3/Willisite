/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../index.html",
    "../js/*",
  ],
  theme: {
    extend: {
      spacing: {
        'std-margin': '5vw',
        'lrg-margin': '10vw',
        'btn-width': '90vw',
        'btn-width-xl': '80vw',
        'par-margin': '1.25rem',
      },
    },
  },
  plugins: [],
}

