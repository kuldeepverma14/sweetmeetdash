/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '510px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bg1: "#5f33a6",
        bg2: "#3d299b",
        bginput:"#F0F2F5",
        text: "#5f33a6",
        text2: "#3d299b",
        border: "#CBD5E1",
      }
    }
  },
  plugins: [],
}