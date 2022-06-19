module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(/assets/img/wave-white.png)',
        'wave-dots': 'url(/assets/img/pattern-white-dots.png)',
        'pattern-characters-red': "url('/assets/img/pattern-characters-red.png')",
        'character-mario': "url('/assets/img/character-l.png')",
        'wave-pink': "url('/assets/img/wave-pink.png')",
        'yellow-dots': "url('/assets/img/pattern-yellow-dots.png')"
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
