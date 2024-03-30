/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#39DB4A",
        red: "#FF6868",
        secondary: "#555",
        primaryBG: "#FCFCFC",
      },
    },
  },
  plugins: [require("daisyui")],
};
