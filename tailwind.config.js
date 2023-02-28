/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter, sans-serif"],
    },
    extend: {
      colors: {
        background: {
          400: "#4A4556",
          500: "#363447",
          700: "#292738",
          800: "#1E1E1E",
        },
        green: {
          150: "#81FBB8",
          200: "#90F7EC",
          300: "#28C76F",
        },
        teal: {
          300: "#32CCBC",
        },
        rose: {
          200: "#CE9FFC",
        },
        purple: {
          400: "#A66DE9",
        },
        indigo: {
          500: "#7367F0",
        },
        orange: {
          400: "#DF9780",
        },
      },
    },
  },
};
