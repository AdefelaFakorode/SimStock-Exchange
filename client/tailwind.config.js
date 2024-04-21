/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#878787',
        'background': '#0C0D0E',
        'buttonColor': '#E0DACD',
      },

      fontFamily: {
        'sans': ['GeneralSans', 'sans-serif'],
    }
    },
  },
  plugins: [],
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
}
