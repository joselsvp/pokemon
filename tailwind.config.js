module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(/assets/img/wave-white.png)',
        'wave-dots': 'url(/assets/img/pattern-white-dots.png)'
      }),
      screens: {
        'xsm': '320px' 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
