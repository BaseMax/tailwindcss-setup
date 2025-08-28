/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/*.html',
    './*.js',
    './**/*.js'
  ],
  safelist: [
    'bg-table-header',
    'text-highlight',
  ],
  theme: {
    extend: {
      colors: {
        // 'table-header': '#091a52',
        // 'highlight': '#ff5733',
      },
    },
  },
  plugins: [],
};
