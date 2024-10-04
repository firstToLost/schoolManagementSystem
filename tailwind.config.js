/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#36454F",
        secondary: "#FF7F50",
        "light-bg": "#F9F8F4",
        "babyBlue-bg": "#F3F2FA",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
