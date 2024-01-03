/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,hbs,js}'],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'serif'],
    },
    extend: {
      colors: {
        primary: '#1C3244',
        secondary: '#F3B942',
        neutral: '#EBEBEB',
      },
      spacing: {
        wa4: '1170px',
        ha4: '1655px',
      },
    },
  },
  plugins: [],
};
