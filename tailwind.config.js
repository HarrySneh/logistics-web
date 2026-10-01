/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b2b5c",
        "primary-light": "#1a4a8a",
        "primary-dark": "#061b3a",
        accent: "#f5a623",
        "accent-hover": "#d98e1c",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
