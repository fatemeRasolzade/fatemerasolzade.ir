/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#100F17",
        "main-blue": "#66788D",
      },
      fontFamily: {
        oswald: ["oswald"],
        msmadi: ["msmadi"],
        verdana: ["verdana"],
      },
    },
  },
  plugins: [],
};
