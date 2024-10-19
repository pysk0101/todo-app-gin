/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "125rem",
      },
    },
    colors: {
      primary: "#00337C",
      primary50: "#00337C50",
      primary30: "#00337C30",
      primary10: "#00337C10",
      secondary: "#FFFFFF",
      main: "#F0F2F5",
      text: "#050505",
      // dark
      darkPrimary: "#88FFE4",
      darkPrimary50: "#88FFE450",
      darkPrimary30: "#88FFE430",
      darkPrimary10: "#88FFE410",
      darkSecondary: "#1F2933     ",
      darkMain: "#121B22",
      darkText: "#C5CACE",

      other: "#5C8121",
    },
  },
  darkMode: "class",
  plugins: [],
};
