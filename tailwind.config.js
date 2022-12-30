/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}',
    './components/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container:{
      center:true,
      padding:'2rem',

    },
    colors: {
      'blue': '#0317fc',
      'purple': '#8003fc',
      'red': '#fc0303',
      'orange': '#fc5203',
      'green': '#2bcf02',
      'yellow': '#e6c302',
      'darkgray': '#273444',
      'gray': '#8492a6',
      'lightgray': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {},
  plugins: [
  ],
}
