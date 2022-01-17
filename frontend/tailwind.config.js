module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  theme: {
    screens: {
      xs: '411px',
      sm: '540px',
      smd: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      '3xl': '1920px',
    },

    extend: {
      colors: {
        primary: '#faad3d',
        secondary: '#373737',
      },
      width: {
        "270px": "270px"
      },
      height: {
        "356px": "356px"
      }
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen xs': {
            maxWidth: 'auto',
            margin: '0px auto',
          },
          '@screen sm': {
            maxWidth: '462px',
            margin: '0px auto',
          },

          '@screen smd': {
            maxWidth: '462px',
            margin: '0px auto',
          },
          '@screen md': {
            maxWidth: '750px',
            margin: '0px auto',
          },
          '@screen lg': {
            maxWidth: '970px',
            margin: '0px auto',
          },
          '@screen xl': {
            maxWidth: '1170px',
            margin: '0px auto',
          },

          '@screen 2xl': {
            maxWidth: '1170px',
            margin: '0px auto',
          },

          '@screen 3xl': {
            maxWidth: '1170px',
            margin: '0px auto',
          },
        },
      });
    },
  ],
};
