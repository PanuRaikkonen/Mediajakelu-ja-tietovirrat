/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'clr-rubine-red': '#CB335Fff',
        'clr-dark-purple': '#251E3Dff',
        'clr--royal-purple': '#805DA5ff',
        'clr-old-mauve': '#662542ff',
        'clr-russian-violet': '#2A2152ff',
      },
    },
  },
  plugins: [],
};
