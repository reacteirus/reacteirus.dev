import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  initialColorMode: `light`,
  colors: {
    ...novelaTheme.colors,
    primary: '#004FE0',
    secondary: '#73737D',
    accent: '#6166DC',
    grey: '#73737D',
    background: '#fff',
  },
};
