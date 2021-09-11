module.exports = {
  purge: ['index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover']
    },
  },
  plugins: [],
}
