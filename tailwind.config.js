const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      cursor: {
        wand: "url('/img/cursors/wand.png') 0 0, auto",
        money: "url('/img/cursors/money.png') 0 0, auto",
        cool: "url('/img/cursors/cool.png') 0 0, auto",
        raisedeyebrow: "url('/img/cursors/raisedeyebrow.png') 0 0, auto",
        starstruck: "url('/img/cursors/starstruck.png') 0 0, auto",
        eyes: "url('/img/cursors/eyes.png') 0 0, auto",
      },
      animation: {
        bounce: "bounce 0.25s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
