/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      'noto': 'Noto Sans, sans-serif',
      'sans': 'Noto Sans, sans-serif',
      'inter': 'Inter, sans-serif',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  variants: {
    extend: {
      divideColor: ['group-hover'],
      width:['group-hover']
    }
  },
}

