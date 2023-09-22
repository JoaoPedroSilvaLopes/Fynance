import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    background: '#FFFFFF',
    backgroundContent: '#F5F5F5',

    primary: '#9671D4',
    primaryLight: '#DDC3E9',
    primaryDark: '#776FDD',

    secondary: '#52A3F1',
    secondaryLight: '#61BAFB',
    secondaryDark: '#4FA9F4',

    textPrimary: '#333333',
    textSecondary: '#e9ecef',
    textDark: '#000000',

    success: '#1ABA5A',
    danger: '#D21436',
    warning: '#FFE23F',
  },
  font: {
    family: 'Karla, Inter, Helvetica, sans-serif',
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      small: '0.875rem',
      normal: '1rem',
      large: '1.125rem',
      xlarge: '1.25rem',
      xxlarge: '1.5rem',
    },
  },
};
