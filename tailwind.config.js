/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/**/*.{js,ts,jsx,tsx}'],
    safelist: [/^bg-/, /^to-/, /^from-/],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
