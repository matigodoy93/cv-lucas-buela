/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        100: '28rem',
      },
      width: {
        100: '28rem',
      },
    },
  },
  plugins: [],
}