/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#4A91E2",
      secondary: "#F1F1F4",
      black: "#4D4E50",
      gray: "#A1A1A1",
      gray_01: "#F1F1F4",
      gray_02: "#585858",
      white: "#FFFFFF",
      error: "#F8285A",
      black_01:'rgba(5, 5, 5, 0.4)',
      red_600: 'rgb(220 38 38)',
      red_700: 'rgb(185 28 28)',
      gray_200: 'rgb(229 231 235)'
    },
    extend: {},
  },
  plugins: [],
};
