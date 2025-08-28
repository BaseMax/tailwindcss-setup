/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  theme: {
    extend: {
      colors: {
        'table-header': '#091a52',
        'highlight': '#ff5733',
      },
    },
  },
  safelist: ['bg-table-header', 'text-highlight'],
  plugins: [],
};
