module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: ['10px', { lineHeight: '12px' }],
        sm: ['13px', { lineHeight: '16px' }],
        base: ['15px', { lineHeight: '17px' }],
        lg: ['18px', { lineHeight: '20px' }],
        xl: ['20px', { lineHeight: '23px' }],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
