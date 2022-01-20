const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        none: "none",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
