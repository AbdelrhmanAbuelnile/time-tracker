/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    colors: {
      // Primary
      'work': 'hsl(15, 100%, 70%)',
      'play': 'hsl(195, 74%, 62%)',
      'study': 'hsl(348, 100%, 68%)',
      'exercise': 'hsl(145, 58%, 55%)',
      'social': 'hsl(264, 64%, 52%)',
      'self-care': 'hsl(43, 84%, 65%)',
      'blume': 'hsl(246, 80%, 60%)',
      // Neutral
      'very-dark': 'hsl(226, 43%, 10%)',
      'dark-blue': 'hsl(235, 46%, 20%)',
      'desaturated': 'hsl(235, 45%, 61%)',
      'pale-blue': 'hsl(236, 100%, 87%)',

    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif']
    },},
  },
  plugins: [],
}
