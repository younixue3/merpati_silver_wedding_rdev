module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        default: ['Parisienne']
      },
      height: {
        '120' : '40rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
