/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '350px',
      'md': '610px',
      'lg': '870px',
      'xl': '1136px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'cell-light': '#ffccaa',
        'cell-dark': '#a05a2c',
        'cell-pointer': '#ffe6d5ff'
      },
      width: {
        'cell': '234px',
        'custom-sm': '250px',
        'custom-md': '500px',
        'custom-lg': '750px',
        'custom-xl': '1000px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

