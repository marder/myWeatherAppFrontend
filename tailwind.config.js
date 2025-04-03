/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        yellowMain: "hsl(39, 100%, 50%)",
        greenMain: "hsl(84, 66%, 50%)",
        navyBlue: "hsl(228, 38%, 18%)",
        gold: "hsl(44, 44%, 84%)",
        darkGold: "hsl(44, 22%, 74%)",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
