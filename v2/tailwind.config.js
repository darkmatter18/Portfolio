const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: colors.green["500"],
        secondary: colors.red["500"],
        danger: colors.red["600"],
        'neon-blue': "#3B27BA",
        'neon-sky': "#027A9F",
        'neon-green': "#13CA91",
        'deep-red': "#330408",
        'deep-blue': "#111935"
      }
    },
    stroke: theme => ({
      'neon-green': "#13CA91"
    }),
    fill: theme => ({
      'neon-green': "#13CA91",
      'purple': theme('colors.purple.600'),
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
