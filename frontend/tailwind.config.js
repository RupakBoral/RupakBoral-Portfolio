/** @type {import('tailwindcss').Config} */

const tailwindScrollbar = require('tailwind-scrollbar');
const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [tailwindScrollbar, flowbiteReact],
}