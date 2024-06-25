/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'primary': '#0a0a11',
        'second': '#2852C7',
        'pink': '#ad002a',
        'black': '#151525',
      },
    },
  },
  plugins: [],
}

