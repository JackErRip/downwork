/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // fontSize: {
    //   1xl: ['40px', '54px'],
    // },
    extend: {
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
        'landscape': { 'raw': '(orientation: landscape)' },
      },
    },
  },
  plugins: [],
}