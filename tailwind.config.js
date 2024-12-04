/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#373737',
        'secondary':'#40BFFF',
        'highlight':'#FF4858',
        'outline':'#BCDDFE'
      },
      fontFamily:{
        custom:['poppins','sans-serif']
      }
    },
  },
  plugins: [],
}