import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#000000',
        textPrimary: '#ffffff',
        accent: '#4bffa5',
      },
    },
  },
};
