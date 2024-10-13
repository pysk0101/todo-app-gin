/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
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

      main1: "#5C8121",
      main2: "#00337C",
      // Light hover
      mainHover: "#E4E6E9",
      inputHover: "#E0E0E0", // Added light gray hover

      main1Hover: "#D6EBCF", // Added light green hover
      main2Hover: "#CCE0FF", // Added light blue hover

      inputDark: "#121B22",
      main1Dark: "#2E7D32",
      main2Dark: "#1565C0",
      // Dark hover
      mainHoverDark: "#2C2C2C",
      bg2DarkHover: "#18191A",
      main1HoverDark: "#4CAF50", // Brighter green hover
      main2HoverDark: "#204F8C", // Darker blue hover
    },
  },
  darkMode: "class",
  plugins: [],
};
