/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberpink: '#ff00ff',
        electricblue: '#00ffff',
      },
    },
  },
  plugins: [],
}
