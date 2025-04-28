/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1f65a2",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1fa292",
          foreground: "#ffffff",
        },
        tertiary: {
          DEFAULT: "#a2451f",
          foreground: "#ffffff",
        },
        background: {
          DEFAULT: "#f9f9f9",
          secondary: "#eff6ff",
        },
      },
    },
  },
  plugins: [],
};
