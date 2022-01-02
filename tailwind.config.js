module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    // './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kanit: ['./assets/fonts/Kanit/Kanit-Medium.ttf'],
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        primary: '#03045e',
      },
    },
  },
  variants: {
    animation: ['motion-safe', 'motion-reduce'],
  },

  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
}
