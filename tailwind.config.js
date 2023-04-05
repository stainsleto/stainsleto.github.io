/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "gray" : "#1e1a1f",
        "black" : "#0e0f0e",
      }
    },
  },
  plugins: [],
}