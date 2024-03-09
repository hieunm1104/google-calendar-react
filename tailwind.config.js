/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        '1/5': '1fr 5fr'
      },
      colors: {
        "dark-blue": "var(--dark-blue)",
        "light-blue": "var(--light-blue)",
        "light-orange": "var(--light-orange)",
        "dark-orange": "var(--dark-orange)",
        "calendar-color": "var(--calendar-color)",
        "sky-blue": "var(--sky-blue)",
        tile: {
          base: '#E4F6ED',
        },
        red: colors.rose,
        white: colors.white,
        indigo: colors.indigo,
        green: colors.green,
        purple: colors.purple
      },

    },
  },
  plugins: [],
}

