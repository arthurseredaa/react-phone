const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      "200": "400px"
    },
    colors: {
      ...defaultColors,
      figmaBlue: "#554AFF",
      figmaGray: "#F0F1F8",
      figmaGreen: "#6DD453",
      figmaGreenHover: "#70DE3C"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
