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
      }
    },
    fill: theme => ({
      'purple': theme('colors.purple.600'),
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
