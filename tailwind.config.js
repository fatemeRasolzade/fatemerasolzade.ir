/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#24203b",
        "light-purple": "#9189b3",
        "main-purple": "#b266d2",
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
