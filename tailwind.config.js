/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#100F17",
        "main-blue": "#66788D",
        "main-orange": "#cf6430",
      },
      fontFamily: {
        oswald: ["oswald"],
        verdana: ["verdana"],
      },
      keyframes: {
        slide: {
          "0%": { gap: "130rem", opacity: "0" },
          "100%": { gap: "8rem", opacity: "1" },
        },
      },
      animation: {
        banner: "slide 3s ease-out",
      },
    },
  },
  plugins: [],
};
