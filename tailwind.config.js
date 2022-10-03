/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '930px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'clr-rubine-red': '#CB335Fff',
        'clr-dark-purple': '#251E3Dff',
        'clr-royal-purple': '#805DA5ff',
        'clr-old-mauve': '#662542ff',
        'clr-russian-violet': '#2A2152ff',
      },
      backgroundImage: {
        mainImage: "url('img/mainIMG.png')",
      },
      height: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
      },
    },
  },
  plugins: [],
};
