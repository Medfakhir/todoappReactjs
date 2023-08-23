/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1676px',
    },
    extend: {
      colors: {
        primary: '#161515',
        accent: {
          DEFAULT: '#FD5956',
          hover: '#EB4441',
        },
        grey: '#5F5F5F',
        body: '#FFFEFD',
      },
    },
  },
  plugins: [],
};

