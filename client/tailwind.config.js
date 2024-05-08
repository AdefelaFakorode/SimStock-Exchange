/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#878787',
        'background': '#0C0D0E',
        'buttonColor': '#E0DACD',
        'hoverButtonColor': '#8F8B83',
        'dark-blue': '#243c5a', 
        'light-blue': '#4a8cbb' 
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
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
