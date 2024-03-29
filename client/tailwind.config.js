/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#e4d5f6',
        'background': '#0a0411',
        'primary': '#af85e5',
        'secondary': '#8a1e85',
        'accent': '#d43ab8',
      },
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
