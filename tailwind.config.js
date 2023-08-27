/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      'noto': 'Noto Sans, sans-serif'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

