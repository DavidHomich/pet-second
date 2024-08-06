/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pirmary: "#76736f",
        customGray: "#807e7d",
        border: "#bababa",
        text: "#cdcccb",
      },
    },
  },
  plugins: [],
};
