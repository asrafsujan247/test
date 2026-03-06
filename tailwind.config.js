/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
      'primary': {
        1: '#FDE6EC',
        2: '#0E0F0C',
        3: '#F98958'
      },
      'gray': {
        1: '#637381',
        2: '#626262',
        3: '#CFCFCE',
        4: '#D9D9D9',
        5: '#262724',
      },
      'brand': '#F75611',
      'white-27': 'rgba(255, 255, 255, 0.27)',
      'black': '#000',
      'body-clr': '#565755',
      'body-clr-2': '#F6F6F6',
      'body-clr-3': '#E0EBED',
      'body-clr-4': '#919EAB',
      'brand-clr': '#F75611',
      'brand-clr-20': 'rgba(250, 154, 112, 0.2)',
      'border-clr': '#DADADA',
      'border-2': 'rgba(238, 224, 202, 0.5)',
      'success': '#43792B',
    },
}

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    "colors": colors,
    container: {
      center: true,
    },
    backgroundImage: {
      'gd-white': "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 37.28%)",
      'gd-white-2': "linear-gradient(180deg, #F6F6F6 6.17%, rgba(246, 246, 246, 0) 59.64%)",
      'gd-dark-overlay': "linear-gradient(180deg, rgba(0, 0, 0, 0) 38.99%, rgba(0, 0, 0, 0.5) 66.32%, rgba(0, 0, 0, 0.5) 99.05%)",
      'gd-dark-2': "linear-gradient(180deg, #0E0F0C 0%, #0E0F0C 0%, #0E0F0C 36.98%, rgba(14, 15, 12, 0.73) 100%)",
      'gd-dark-white': "linear-gradient(90deg, #94340A -132.5%, rgba(148, 52, 10, 0) 100%)",
    },
    boxShadow: {
      default: '0px 1px 2px 0px rgba(145, 158, 171, 0.16)',
      'city-shadow': '0px 8px 16px rgba(145, 158, 171, 0.16)',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingInline: '12px',
          '@screen sm': {
            maxWidth: '540px',
            padding: '0',
          },
          '@screen md': {
            maxWidth: '720px',
            padding: '0',
          },
          '@screen lg': {
            maxWidth: '960px',
            padding: '0',
          },
          '@screen xl': {
            maxWidth: '1140px',
            padding: '0',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
            padding: '0',
          }
        }
      })
    }
  ],
}

