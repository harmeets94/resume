module.exports = {
  mode: "jit",
  content: ['./dist/js/*.{js, jsx}', './*.html'],
  theme: {
    extend: {
      colors:{
        'theme_drk_blue': '#003147',
        'theme_primary': '#1C1BC7',
        'theme_primary_dark': '#15159d',
        'theme_secondary': '#B31A89',
        'theme_tertiary': '#7030A0'
      },
      fontFamily:{
        // sans: ['Montserrat-Regular', 'sans-serif']
        sans: ['Poppins-Regular', 'sans-serif']
      },
      spacing: {
        '30': '7.5rem',
        'vh-5': '5vh',
        'vh-8': '8vh',
        'vh-9': '9vh',
        'vh-10': '10vh',
        'vh-15': '15vh',
        'vh-20': '20vh',
        'vh-25': '25vh',
        'vh-30': '30vh',
        'vh-40': '40vh',
        'vh-50': '50vh',
        'vh-60': '60vh',
        'vh-70': '70vh',
        'vh-80': '80vh',
        'vh-90': '90vh',
        'vh-95': '95vh',
        'vh-100': '100vh',
        '3/10': '30%',
        '7/10': '70%'
      },
      boxShadow:{
        'lg-dark': '0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2)',
        'lg-dark/[0.5]': '0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)',
        'xl-dark': '0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)'
      }
    },
  },
  plugins: [],
}
