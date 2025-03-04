/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-black": "#000000bf",
      },
      screens: {
        "max-xs": { max: "425px" }, // For screens <= 425px
        "max-sm": { max: "640px" }, // For screens <= 640px
        "max-md": { max: "768px" }, // For screens <= 768px
        "max-lg": { max: "1024px" }, // For screens <= 1024px
        "max-xl": { max: "1280px" }, // For screens <= 1024px
        "max-2xl": { max: "1536px" }, // For screens <= 1024px
      },
      maxWidth: {
        "1280px": "1280px",
        "1024px": "1024px",
        "768px": "768px",
        "425px": "425px",
      },
      fontFamily: {
        fontRoboto: "Roboto",
      },
    },
  },
  plugins: [],
};
