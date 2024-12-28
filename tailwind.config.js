/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        surah: ["QCFv2", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
