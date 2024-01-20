/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,cjs,mjs,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      screens: {
        'xs': '475px',
        "xxs": "375px",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    "prettier-plugin-organize-attributes",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
    'macros'
  ],
}