/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin')
  ],
}
