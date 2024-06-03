import { setTransitionHooks } from 'vue';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Montserrat"'
      },
      colors: {
        cerise: "#D921A6",
        pacific: "#31AFD4",
        alice: "#E9F1F7",
      },
    },
    plugins: [],
  },
};
