/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1E68D7",
          DEFAULT: "#1E68D7"
        },
        gray: {
          light: "#FEFEFE",
          DEFAULT: "#F7F7F7",
          medium: "#ECEAEA",
          black: "#1E1E1E"
        },
      },
    },    
  },
  plugins: [],
}

