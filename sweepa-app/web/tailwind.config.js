// tailwind.config.js
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
    "theme": {
         colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'caribbeangreen': '#06D6A0',
          'MarjorieBlue ': '#623CEA',
          'midnight': '#121063',
          'metal': '#565584',
          'MadderLake': '#CC2936',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
        },
        fontFamily: {
            // font-family: 'Oswald', sans-serif;
            'cooper': ['Oswald', 'sans-serif'],
            'press-start': ['"Press Start 2P"', 'cursive']
           },
        fontSize: {
          '10xl': '10rem',
          '11xl': '12rem',
          '12xl': '14rem',
        }
    }
};
