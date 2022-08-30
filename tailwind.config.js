/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        primary: '#654DE4',
        'primary-black': '#242424',
        'primary-gray': '#525A63',
        'primary-gray-light': '#B7BAC2',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
